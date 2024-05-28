import { PiCopyrightFill } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import './footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-legend">
       <PiCopyrightFill  /> 2024 S A C - Online ecommerce
      </p>
      <div className="footer-links">
        <Link to={"https://x.com/?mx=2"} target="blank">
         <RiTwitterXFill className="footer-XIcon" />
        </Link>
        <Link to={"https://www.facebook.com/"} target="blank">
         <FaFacebook className="footer-FbIcon" />
        </Link>
        <Link to={"https://www.instagram.com/"} target="blank">
         <BsInstagram className="footer-IgIcon"/>
        </Link>
      </div>
    </div>
  )
}

export default Footer
