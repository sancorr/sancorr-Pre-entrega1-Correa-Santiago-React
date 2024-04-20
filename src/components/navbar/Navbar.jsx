import ImgNavbar from "../../assets/wildCapital-removebg-preview.png";
import CartWidget from "./Cartwidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <img
            style={{ width: "200px" }}
            src={ImgNavbar}
            alt="Logo de Wild Capital"
          />
        </div>
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
            <li className="nav-item">Celulares</li>
            <li className="nav-item">Prestamos</li>
            <li className="nav-item">Electronica</li>
          </ul>
        </div>
      </div>
      
      <CartWidget />
    </nav>
  );
};
export default Navbar;
