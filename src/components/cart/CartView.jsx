import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./cartView.css";

const CartView = () => {
  const { cart, deleteAllProductsInCart, deleteProductById, totalPrice } = useContext(CartContext);
  
  return (
    <div className="table-cartTableContainer">
      <h1 className="cart-title">Carrito</h1>
      <div className="table-cartTable">
        <table>
          <thead className="table-cartTableHead">
            <tr className="table-cartTableHeadElements dark">
              <th></th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Sub total</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-cartTableBody">
            {cart.map((productInCart) => (
              <tr key={productInCart.id} className="table-cartTableBodyElements">
                <td>
                  <img src={productInCart.image} alt={productInCart.name} />
                </td>
                <td>{productInCart.name}</td>
                <td>{productInCart.price}</td>
                <td>x {productInCart.quantity}</td>
                <td>{productInCart.price * productInCart.quantity}</td>
                <td>
                  <button
                    className="table-cartTableBodyElementsDeleteProductButton"
                    onClick={() => deleteProductById(productInCart.id)}>
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-cartTableBodyFooterElements">
        <p className="table-cartTableBodyFooterElements-total dark">
          <strong>TOTAL:${totalPrice()} </strong>
        </p>
      </div>
      <div className="cart-confirmButton">
        <Link to="/checkout">
         <button>Confirmar Compra</button>
        </Link>
      </div>
      <div className="cart-cleanCartButton">
        <button onClick={deleteAllProductsInCart}>
          <FaTrashAlt /> Vaciar carrito
        </button>
      </div>
    </div>
  );
};
export default CartView;
