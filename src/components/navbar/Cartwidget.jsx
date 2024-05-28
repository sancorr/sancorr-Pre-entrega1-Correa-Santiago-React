import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import "./cartWidget.css"

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  //Renderizado condicional:
  // si totalQuantity() > 0 es true, &&(OP LOGICO AND (Y), devuelve true si todo es true, devuelve false si una condicion es false) devuele true y renderiza  la ejecucion de la funcion con el numero de elementos
  // si totalQuantity() > 0 es false, &&(OP LOGICO AND (Y), devuelve true si todo es true, devuelve false si una condicion es false) devuele false y NO y renderiza  la ejecucion de la funcion con el numero de elementos
  
  return (
    <Link className="cart-icon-container" to= "/cart">  
      {totalQuantity() === 0 ? 
       <BsCart4 className="cart-icon"/> : 
       <div className="cart-countContainer">

          <span className="cart-count">{totalQuantity()}
           <MdAddShoppingCart className="cart-iconAdd" />
          </span>

       </div>        
       }
    </Link>
  );
};

export default CartWidget;
