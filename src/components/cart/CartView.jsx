import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
/* import "./cartView.css"; */

const CartView = () => {
  const { cart, deleteAllProductsInCart, deleteProductById, totalPrice } =
    useContext(CartContext);

  return (
    <div>
      <h1 className="text-center mb-4">Carrito</h1>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th></th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Sub total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((productInCart) => (
              <tr key={productInCart.id}>
                <td>
                  <img
                    src={productInCart.image}
                    alt={productInCart.name}
                    className="img-thumbnail"
                    style={{
                      width: "75px",
                      height: "75px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>{productInCart.name}</td>
                <td>${productInCart.price}</td>
                <td>x {productInCart.quantity}</td>
                <td>${productInCart.price * productInCart.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProductById(productInCart.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mt-4">
        <p className="fw-bold fs-4 mb-3 mb-sm-0">
          TOTAL: <span className="text-success">${totalPrice()}</span>
        </p>
        <div d-flex flex-column flex-sm-row align-items-center>
          <Link to="/checkout" className="btn btn-success mb-2 mb-sm-0 me-2">
            <FaCheckSquare /> Confirmar Compra
          </Link>
          <button className="btn btn-danger" onClick={deleteAllProductsInCart}>
            <FaTrashAlt /> Vaciar carrito
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartView;
