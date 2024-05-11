import ImgCard from "../../assets/sac-no-background.png";
import { Link } from "react-router-dom";

import './item.css'


const Item = ({ product }) => {
  return (
    <Link to={`/detail/${product.id}`}>
      <div className="individualCard">
        <div className="brandCard">
          <img className="brandCardImage" src={ImgCard} />
        </div>
          <img className="imageCard" src={product.image}  />
          <p className="nameCard">{product.name}</p>
          <span className="priceCard"> $ {product.price}</span>
        </div>
    </Link>
  )
}

export default Item
