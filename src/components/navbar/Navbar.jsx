import ImgNavbar from "../../assets/sac.png";
import CartWidget from "./Cartwidget";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [hoverPosition, setHoverPosition] = useState(0);
  const navbarNavRef = useRef(null);

  useEffect(() => {
    if (navbarNavRef.current) {
      navbarNavRef.current.style.setProperty(
        "--hover-position",
        `${hoverPosition}px`
      );
    }
  }, [hoverPosition]);

  const handleMouseEnter = (e) => {
    const elementWidth = e.target.offsetWidth;
    const elementLeft = e.target.offsetLeft;
    setHoverPosition(
      elementLeft + elementWidth / 2 - navbarNavRef.current.offsetLeft
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <img className="logo" src={ImgNavbar} alt="Logo de Wild Capital" />
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
          <ul className="navbar-nav me-auto" ref={navbarNavRef}>
            <li className="nav-item" onMouseEnter={handleMouseEnter}>
              <Link className="nav-link" to="/category/celulares">
                Celulares
              </Link>
            </li>
            <li className="nav-item" onMouseEnter={handleMouseEnter}>
              <Link className="nav-link" to="/category/computadoras">
                Computadoras
              </Link>
            </li>
            <li className="nav-item" onMouseEnter={handleMouseEnter}>
              <Link className="nav-link" to="/category/electronica">
                Electrónica
              </Link>
            </li>
          </ul>

          <div class="cart-widget d-none d-lg-block">
            <Link className="nav-item" to="/cart">
              <CartWidget className="cart-widget" />
            </Link>
          </div>

          <div className="cart-widget d-lg-none  mt-3">
            <Link className="nav-item" to="/cart">
              <CartWidget />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
