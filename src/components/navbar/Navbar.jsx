import ImgNavbar from "../../assets/sac.png";
import CartWidget from "./Cartwidget";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/">
          <img className="logo"
            src={ImgNavbar}
            alt="Logo de Wild Capital"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/category/celulares" >
             <li className="nav-item">Celulares</li>
            </Link>
            <Link to="/category/computadoras">
             <li className="nav-item">Computadoras</li>
            </Link>
            <Link to="/category/electronica">
             <li className="nav-item">Electronica</li>
            </Link>
          </ul>
        </div>
       <CartWidget className="cart-widget" />
      </div>
      
    </nav>
  );
};
export default Navbar;
