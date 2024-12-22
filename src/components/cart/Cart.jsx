import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartView from "./CartView"



const Cart = () => {

  const { cart }= useContext(CartContext)

  //early return
  if(cart.length === 0){

    return(
      <div className="text-center mt-5">
        <h1 className="display-5">No hay productos en el carrito! 😢 😢 </h1>
        <Link className="btn btn-primary mt-3" to="/">Mira nuestros productos 😏  🧐  </Link>
      </div>
    )
  }
  return (
    <div className="container mt-5">
      <CartView />
    </div>
  )
}

export default Cart
