import { useState } from "react"
import GoToCart from "../cart/GoToCart"
import CounterView from "./CounterView"
import './itemCount.css'


const ItemCount = ({ stock, addProduct }) => {
 const [ count, setCount] = useState(1)

 const [ showCunt, setShowCount ] = useState(true)

 const handleCLickReduce = () =>{
    if(count > 1){
        setCount(count - 1)
    }
 }

 const handleClickAdd = () =>{
    if(count < stock){
       setCount( count + 1)

    }
 }

 const handleClickAddCart = ()=>{
   addProduct(count);
   setShowCount(false)
   
 }

 
 
 

  return (
    <>
     
      { 
      showCunt ? <CounterView handleCLickReduce={handleCLickReduce} handleClickAdd={handleClickAdd} handleClickAddCart={handleClickAddCart} count={count} /> : <GoToCart />
      }
      
    </>
  )
}

export default ItemCount
