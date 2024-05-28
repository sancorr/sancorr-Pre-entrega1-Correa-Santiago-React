import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";
import { BiCartAdd } from "react-icons/bi";

import './itemCount.css'

const CounterView = ({ handleCLickReduce, handleClickAdd, handleClickAddCart,count  }) => {
  return (
    <div className="footerCountButtons">

      <div className='addReduceCounter'>
        <button className="restButton" onClick={handleCLickReduce}>
          <RiSubtractLine  />
        </button>

       <p className="count">{count}</p>

       <button className="addButton" onClick={handleClickAdd}>
         <RiAddLine  />
       </button>
      </div>

      <button className="cartButton" onClick={ handleClickAddCart }>{
        <BiCartAdd className="cartButtonIcon"/>
      } 
      Agregar al carrito
      </button>
      

    </div>
    
  )
}

export default CounterView
