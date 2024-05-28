import { Link } from "react-router-dom"
import { BsSendCheckFill } from "react-icons/bs";
import './goToCart.css'

const GoToCart = () => {
  return (
    <Link to="/cart">
      <button className="finishButton">
        <BsSendCheckFill className="finishIcon" />
        Terminar compra
        </button>
    </Link>
  )
}

export default GoToCart
