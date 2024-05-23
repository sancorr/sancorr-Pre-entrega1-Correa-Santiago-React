import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cartWidget.css"

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  //Renderizado condicional:
  // si totalQuantity() > 0 es true, &&(OP LOGICO AND (Y), devuelve true si todo es true, devuelve false si una condicion es false) devuele true y renderiza  la ejecucion de la funcion con el numero de elementos
  // si totalQuantity() > 0 es false, &&(OP LOGICO AND (Y), devuelve true si todo es true, devuelve false si una condicion es false) devuele false y NO y renderiza  la ejecucion de la funcion con el numero de elementos
  
  return (
    <Link className="cart-icon-container" to= "/cart">  
      {totalQuantity() === 0 ? <BsCart4 className="cart-icon"/> : <span className="cart-count">{totalQuantity()}</span>}
    </Link>
  );
};

export default CartWidget;
