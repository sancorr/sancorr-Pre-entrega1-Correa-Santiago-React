import './itemCount.css'

const CounterView = ({ handleCLickReduce, handleClickAdd, handleClickAddCart,count  }) => {
  return (
    <div className="footerCountButtons">

      <button className="restButton" onClick={handleCLickReduce}> - </button>
      <p className="count">{count}</p>
      <button className="addButton" onClick={handleClickAdd}> + </button>
      <button className="cartButton" onClick={ handleClickAddCart }>Agregar al carrito</button>

    </div>
    
  )
}

export default CounterView
