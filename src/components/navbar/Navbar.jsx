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
      navbarNavRef.current.style.setProperty('--hover-position', `${hoverPosition}px`);
    }
  }, [hoverPosition]);

  const handleMouseEnter = (e) => {
    const elementWidth = e.target.offsetWidth;
    const elementLeft = e.target.offsetLeft;
    setHoverPosition(elementLeft + elementWidth / 2 - navbarNavRef.current.offsetLeft);
  };


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
          <ul className="navbar-nav" ref={navbarNavRef}>
            <Link className="nav-item" to="/category/celulares" onMouseEnter={handleMouseEnter}>
             <li>Celulares</li>
            </Link>
            <Link className="nav-item" to="/category/computadoras" onMouseEnter={handleMouseEnter}>
             <li>Computadoras</li>
            </Link>
            <Link className="nav-item" to="/category/electronica" onMouseEnter={handleMouseEnter}>
             <li>Electronica</li>
            </Link>
          </ul>
        </div>
       <CartWidget className="cart-widget" />
      </div>
      
    </nav>
  );
};
export default Navbar;
