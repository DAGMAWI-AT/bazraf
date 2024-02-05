import React, { useState, useEffect } from "react";
import { nav } from "../../data/Data";
import { NavLink ,Link} from "react-router-dom";
// Example import statement in your code
import { faIconName } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { CropRotate, PieChart, Settings, ViewInAr, Code, BarChart, CloudOutlined, FacoritBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const Header = () => {
  const [navList, setNavList] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const header = document.querySelector('.header_area');

      if (header) {
        if (scrollPosition > 100) {
          header.classList.add('header_scroll');
        } else {
          header.classList.remove('header_scroll');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeNavList = () => {
    setNavList(false);
  };

  return (
    <header className={`header_area header_stick no_bg mobile_menu_enabled${navList ? ' nav-open' : ''}`}>
      <div className="container flexsb">
        <div className='logo'>
        <Link to="/"  data-aos="fade-up-right">
             <img src='../IMGlogo1.jpg' alt='LOGO' />
        </Link>
          {/* <img src='../IMGlogo1.jpg' alt='LOGO' /> */}
        </div>

        <div>
          <span><i> <a href="mailto:amaredagmawi1@gmail.com" target="_blank"><EmailOutlined /></a></i> </span>
          {/* <span><a href=""> <PhoneIphone/>+251985187059</a></span><br/> */}
          <span> <a href="https://www.linkedin.com/in/dagmawi-ama-b79405210" target="_blank"> <FontAwesomeIcon icon={faLinkedin} /> </a></span>
        </div>


        <div className={navList ? "small" : "nav"}>
          {nav.map((list, index) => (
            <NavLink
              to={list.path}
              key={index}
              exact
              activeClassName="active"
              onClick={closeNavList} // Close the mobile menu on NavLink click
            >
              {list.text}
            </NavLink>
          ))}
          <span className="arrow_carrot-right"></span>
        </div>

        <div className="toggle">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            onClick={() => setNavList(!navList)}
          >
            {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
