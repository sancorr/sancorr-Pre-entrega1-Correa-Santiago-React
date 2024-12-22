import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './footer.css'

const Footer = () => {
  return (
    <div className="bg-dark text-white py-3 mt-auto">
      {/* Información sobre el proyecto */}
      <div className="container text-center">
        <p className="mb-1">
          <span>&copy; 2024 S A C - Online Ecommerce</span>
          <br />
          Este proyecto fue desarrollado con React.js, npm, Firebase, y JavaScript.
        </p>
      </div>

      {/* Enlaces de contacto */}
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/santiago-correa2/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaLinkedin className="footer-icon" />
        </a>
        <a
          href="https://github.com/sancorr"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaGithub className="footer-icon" />
        </a>
        <a
          href="mailto:correasanti1997@gmail.com"
          className="footer-link"
        >
          <FaEnvelope className="footer-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer
