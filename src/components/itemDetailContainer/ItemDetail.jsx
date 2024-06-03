import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import ItemCount from "../itemCount/ItemCount";


import "./itemDetail.css";

const ItemDetail = ({ name, description, price, category, image, stock, id }) => {
  
  

  const { addProductToCart, cart} = useContext(CartContext);

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
          <img className="image" src={image} alt={name} />
        </div>

        <section className="sectionContenedor">
          <header className="productTitle">
            <h3>{name}</h3>
          </header>

          <div className="sectionParrafo">
           <p>{description}</p>
           <p>$ {price}</p>
           <p>Categoria: {category}</p>
           <p>stock disponible: {stock}</p>
          </div>

          <div className="footerCount">
            {
              stock === 0 ? <p>Producto sin stock</p> :
             <ItemCount stock={stock} addProduct={addProduct} />
            }
          </div>

        </section>
      </article>
    </div>
  );
};

export default ItemDetail;
