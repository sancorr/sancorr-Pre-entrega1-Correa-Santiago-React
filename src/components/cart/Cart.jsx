import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import './emptyCart.css'
import CartView from "./CartView"



const Cart = () => {

  const { cart }= useContext(CartContext)

  //early return
  if(cart.length === 0){

    return(
      <div className="cart-emptyCartContainer">
        <h1 className="cart-emptyCartTitle">No hay productos en el carrito! 😢 😢 </h1>
        <Link className="cart-emptyCartLink" to="/">Mira nuestros productos 😏  🧐  </Link>
      </div>
    )
  }
  return (
    <div>
      <CartView />
    </div>
  )
}

export default Cart
