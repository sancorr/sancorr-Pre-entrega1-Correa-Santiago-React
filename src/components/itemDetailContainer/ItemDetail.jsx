import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import ItemCount from "../itemCount/ItemCount";

import "./itemDetail.css";

const ItemDetail = ({ name, description, price, category, image, stock, id }) => {

  const { addProductToCart} = useContext(CartContext);

  const addProduct = (count) =>{
    //estructura del objeto que va al carrito
    const productCart = { name, description, id, price, category, image, stock, quantity: count }
    //Uso la funcion que viene del context para añadir el producto/objeto al carrito
    addProductToCart(productCart);
  }



  return (
    <div className="detailContenedor">
      <article className="articleContenedor">
        <div className="articleImage">
          <img src={image} alt={name} />
        </div>

        <section className="sectionContenedor">
          <header className="productTitle">
            <h3>{name}</h3>
          </header>

          <div className="sectionParrafo">
           <p>$ {price}</p>
           <p>{description}</p>
           <p>{category}</p>
          </div>

          <footer className="footerCount">
            <ItemCount stock={stock} addProduct={addProduct} />
          </footer>

        </section>
      </article>
    </div>
  );
};

export default ItemDetail;
