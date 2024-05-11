import { useState } from "react"
import './itemCount.css'


const ItemCount = ({ stock }) => {
 const [ count, setCount] = useState(1)

 const restar = () =>{
    if(count > 1){
        setCount(count - 1)
    }
 }

 const sumar = () =>{
    if(count < stock){
       setCount( count + 1)

    }
 }

 const agregarAlCarrito = ()=>{
    console.log(count);
 }
 

  return (
    <div className="footerCountButtons">
        <button className="restButton" onClick={restar}> - </button>
        <p className="count">{count}</p>
        <button className="addButton" onClick={sumar}> + </button>
        <button className="cartButton" onClick={ agregarAlCarrito }>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
