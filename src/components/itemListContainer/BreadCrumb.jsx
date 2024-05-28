import { Link } from "react-router-dom";
import './breadCrumb.css'

const BreadCrumb = ({ idCategory }) => {
  return (
    <nav >
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/category/${idCategory}`}>{idCategory}</Link>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;

