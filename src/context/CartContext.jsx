import { createContext, useState } from "react";

// Contexto de react llamado cartContext
const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([]);

    const addProductToCart = (newProduct)=>{
        //Con spread me aseguro que no se sobreescriban los productos en el carrito
        //De esta manera se guarda la informacion del carrito y se agrega la nueva info que llegaria
        // Esta funcion envia un objeto (en un array) con la informacion del nuevo producto a añadir
        
        //sumar cantidad en caso de que el prod este en el carrito previamente
        const PreviousProduct = cart.filter( product => product.id === newProduct.id);
        if(PreviousProduct.length > 0){
            const updatedCart = cart.map( product => product.id === newProduct.id ? {...product, quantity: product.quantity + newProduct.quantity} : product);
            setCart(updatedCart)
        } else{
            setCart([...cart, newProduct])
        }
    }
    
    // Cantidad de productos en el carrito
    const totalQuantity = () => {
        const productsQuantity = cart.reduce( (acc, product)=>{
            return acc + product.quantity
        },0 )

        return productsQuantity
    }

    const totalPrice = () =>{
        const totalAmount = cart.reduce( (total, cartProduct)=> total + ( cartProduct.price * cartProduct.quantity ), 0 )
        return totalAmount
    }

    //funcion para eliminar productos por id
    const deleteProductById = (productId) =>{
        //Debugs hechos porque el id para elimnar el producto era undefined, y la funcion eliminaba el carrito completo.
        //asi encontre que al agregar el producto al carrito, el objeto no recibia la propiedad id y pude solucionarlo
        //console.log("Producto a eliminar:", productId);
        //console.log("Carrito antes de eliminar:", cart);
        const newCart = cart.filter(product => product.id !== productId);
        //console.log("Carrito después de eliminar:", newCart);
        setCart(newCart)

    }

    //Eliminar todos los productos- volver la variable de estado a vacio.
    const deleteAllProductsInCart = () => {
        setCart([])
    }

     
  return (
  <CartContext.Provider value={ {  cart, addProductToCart, totalQuantity, deleteAllProductsInCart, deleteProductById, totalPrice } } >
     {children}
  </CartContext.Provider>
  )
};

export { CartContext, CartProvider };
