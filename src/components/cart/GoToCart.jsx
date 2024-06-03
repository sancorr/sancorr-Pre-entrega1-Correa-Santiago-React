import { Link } from "react-router-dom";
import { BsSendCheckFill } from "react-icons/bs";
import "./goToCart.css";

const GoToCart = () => {
  return (
    <div className="goToCart-container">
      <Link to="/cart">
        <button className="finishButton">
          <BsSendCheckFill className="finishIcon" />
          Terminar compra
        </button>
      </Link>
      <Link to="/">Seguir viendo productos</Link>
    </div>
  );
};

export default GoToCart;
