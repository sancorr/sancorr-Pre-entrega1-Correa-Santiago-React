import { Link } from "react-router-dom"

const GoToCart = () => {
  return (
    <Link to="/cart">
      <button>Terminar compra</button>
    </Link>
  )
}

export default GoToCart
