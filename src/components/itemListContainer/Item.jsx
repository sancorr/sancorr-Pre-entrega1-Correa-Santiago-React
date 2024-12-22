import ImgCard from "../../assets/sac-no-background.png";
import { Link } from "react-router-dom";

/* import "./item.css"; */

const Item = ({ product }) => {
  return (
    <Link to={`/detail/${product.id}`} className="text-decoration-none">
      <div className="card h-100">
        <div className="text-center p-3">
          <img
            className="img-fluid"
            src={ImgCard}
            alt={product.name}
            style={{ maxHeight: "100px" }}
          />
        </div>
        <img
          className="img-fluid rounded p-2"
          src={product.image}
          alt={product.name}
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted">Precio: ${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
