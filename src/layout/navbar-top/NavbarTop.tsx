import "./NavbarTop.scss"
import { FaTelegram, FaInstagram, FaFacebook, FaTwitter,   } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const NavbarTop = () => {
  return (
    <div className="navbar-top">
        <div className="navbar__top-wrapper container">
            <div className="top-actions">
                    <a className="phone-action" href="tel:++998770066662">
                        <FaPhone/>
                        <span>+998 77 006 66 62</span>
                    </a>
                    <a className="email-action" href="mailto:iworktour@gmail.com">
                        <MdEmail/>
                        <span>iworktour@gmail.com</span>
                    </a>
            </div>
                <div className="social-media">
                    <a className="social-link" href=""><FaTelegram/></a>
                    <a className="social-link" href=""><FaInstagram/></a>
                    <a className="social-link" href=""><FaFacebook/></a>
                    <a className="social-link" href=""><FaTwitter/></a>
                </div>
        </div>
    </div>
  )
}

export default NavbarTop
