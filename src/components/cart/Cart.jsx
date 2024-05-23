import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"



const Cart = () => {

  const { cart, deleteAllProductsInCart, deleteProductById, totalPrice }= useContext(CartContext)

  //early return
   if(cart.length === 0){
    return(
      <div>
        <h1>carrito vacio</h1>
        <Link to="/">Ir al home </Link>
      </div>
    )
   }

  return (
    <div>
        <h1>Carrito</h1>
      {
        cart.map( (productInCart) => (
         //PROXIMAMENTE CONSTRUIR DEBIDAMENTE LA ESTRUCTURA DEL CARRITO
            <div key={productInCart.id}>
                <h3>{ productInCart.name}</h3>
                <img src={productInCart.image} alt={productInCart.name} />
                <h4>{ productInCart.price}</h4>
                <h5>Cantidad: { productInCart.quantity }</h5>
                <h4>Precio parcial x producto: { productInCart.price * productInCart.quantity}</h4>
                {/* Boton de eliminar podria ser un icono */}
                <button onClick={()=> deleteProductById(productInCart.id)}>Eliminar Producto</button>
                
            </div>
        ))
    }
    <h2>Total: $ { totalPrice() }</h2>
    <button onClick={deleteAllProductsInCart}>Vaciar carrito</button>
    </div>
  )
}

export default Cart
