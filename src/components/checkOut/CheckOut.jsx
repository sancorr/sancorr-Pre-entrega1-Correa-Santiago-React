import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, Timestamp, doc, setDoc } from "firebase/firestore";
import db from "../../db/db.js";
import { Link } from "react-router-dom";
import FormView from "./FormView";
import { formValidation } from "../../utils/validationYup.js";
import { toast } from "react-toastify";
import './formSuccess.css'


const CheckOut = () => {
  const { cart, totalPrice, deleteAllProductsInCart } = useContext(CartContext);

  const [idOrder, setIdOrder] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    address: "",
    phone: "",
  });

  const handleChangeInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleOnSubmitForm = async (event) => {
    event.preventDefault();
    //estructurar la informacion primero
    const buyOrder = {
      buyer: { ...formData },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      totalPrice: totalPrice(),
    };

    //primero comprobar si los campos coinciden, si no coinciden se notifica, si coinciden ->
    if (formData.email !== formData.confirmEmail) {
      //Cambiar por debida notificación
      if(formData.email == "" || formData.confirmEmail == ""){
        toast.warning("Email es un campo requerido")
      } else{
        toast.error("Los campos de email no conciden");
      }
    } else {
      // si coinciden -> intenta esperar la confirmacion de todos los campos requeridos con el formato correcto del formulario
      try {
        const response = await formValidation(formData);
        // si esta todo OK subir la orden (habiendo hecho las comprobaciones pertinentes)
        if (response.status === "success") {
          //subir la orden a la db
          generateOrder(buyOrder);
        } else {
          //si no se aprueban las confirmaciones ->
          // -> Cambiar por debida notificación, para notificar al usuario que el campo es requerido
          //console.log(response.message);
          toast.warning(response.message)
        }
      } catch (error) {
        //Cambiar por debida notificación, para notificar al usuario que un error a ocurrido
        toast.error("Ha ocurrido un error, intente nuevamente más tarde. Disculpe las molestias")
      }
    }
  };

  const generateOrder = (order) => {
    const orderRef = collection(db, "buyOrders");
    addDoc(orderRef, order)
      .then((response) => setIdOrder(response.id))
      //notificar al usuario de este error
      .catch((err) => toast.error("Ha ocurrido un error, intente nuevamente más tarde. Disculpe las molestias"))
      .finally(() => {
        //reducir el stock
        updateStock();
        //despues que se sube la orden, se vacia el carrito
        deleteAllProductsInCart();
      });
  };

  const updateStock = () => {
    cart.map((cartProduct) => {
      // referencia a cantidad para despues restarla al stock(existe en los productos en el carrito, pero no el objeto original)
      let quantity = cartProduct.quantity;
      //se borra la propiedad cuantity para que no se agregue en el objeto que va a la base de datos
      delete cartProduct.quantity;

      if (cartProduct.stock >= quantity) {
        const productRef = doc(db, "products", cartProduct.id);
        setDoc(productRef, {
          ...cartProduct,
          stock: cartProduct.stock - quantity,
        })
          .then(() => console.log("stock actualizado correctamente"))
          .catch((err) => toast.error("Ha ocurrido un error, intente nuevamente más tarde. Disculpe las molestias"));
      } else {
        // lo contemplo por si acaso, pero el usuario no puede llegar a este punto, lo restrinjo en ItemDetail
        toast.warning("Producto sin stock. Disculpe las molestias")
      }
    });
  };

  return (
    <div className="container mt-4">
      {idOrder ? (
        <div className="successBuy text-center">
          <h2>Compra realizada con exito 🙂 </h2>
          <p>El ID de su compra es: {idOrder}</p>
          <Link className="btn btn-primary" to="/">Volver al inicio</Link>
        </div>
      ) : (
        <FormView
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleOnSubmitForm={handleOnSubmitForm}
        />
      )}
    </div>
  );
};

export default CheckOut;
