import Item from "./Item"
import './itemList.css'
const ItemList = ({ products }) => {
  return (
    <div className="prueba">
      { products.map((product) => (
        <div key={product.id} className="itemWrapper">
          <Item  product= {product}/>

        </div>
      ))}
    </div>
  )
}

export default ItemList
