import ImgCard from "../../assets/sac-no-background.png";
import { Link } from "react-router-dom";

import './item.css'


const Item = ({ product }) => {
  return (
    <Link className="item-clickeableCard" to={`/detail/${product.id}`}>
      <div className="item-individualCard">
        <div className="item-brandCard">
          <img className="item-brandCardImage" src={ImgCard} />
        </div>
          <img className="item-imageCard" src={product.image}  />
          <h2 className="item-nameCard">{product.name}</h2>
          <span className="item-priceCard"> precio: ${product.price}</span>
        </div>
    </Link>
  )
}

export default Item
