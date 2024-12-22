import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import ItemCount from "../itemCount/ItemCount";


/* import "./itemDetail.css"; */

const ItemDetail = ({ name, description, price, category, image, stock, id }) => {
  
  

  const { addProductToCart, cart} = useContext(CartContext);

  const addProduct = (count) =>{
    //estructura del objeto que va al carrito
    const productCart = { name, description, id, price, category, image, stock, quantity: count }
    //Uso la funcion que viene del context para añadir el producto/objeto al carrito
    addProductToCart(productCart);
  }

  
  return (
    <div className="container my-4">
      <div className="row g-4">

        <div className="col-12 col-md-6 d-flex align-items-stretch">
          <div className="card h-100">
            <img src={image} className="card-img-top" alt={name} />
          </div>
        </div>


        <div className="col-12 col-md-6 d-flex align-items-stretch">
          <div className="card h-100 p-3">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{description}</p>
            <p className="fw-bold">Precio: ${price}</p>
            <p className="text-muted">Categoría: {category}</p>
            <p>
              <span className="fw-bold">Stock disponible:</span>{" "}
              {stock > 0 ? stock : "Sin stock"}
            </p>


            <div className="mt-3">
              {stock > 0 ? (
                <ItemCount stock={stock} addProduct={addProduct} />
              ) : (
                <p className="text-danger">Producto sin stock</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
