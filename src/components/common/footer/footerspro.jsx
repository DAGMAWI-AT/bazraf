import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footers">
      <footer>
        <div className="footer-top section py-8">
          <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="col-span-1 md:col-span-1">
            <div className="single-footer links">
              <h4 className="mb-4">Information</h4>
              <ul>
                <li><Link to="/about-us">Home</Link></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">About</a></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
          </div>
            <div className="col-span-1 md:col-span-1">
              <div className="single-footer links">
                <h4 className="mb-4">Information</h4>
                <ul>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><a href="#">Faq</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><a href="#">Help</a></li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1">
              <div className="single-footer links">
                <h4 className="mb-4">Customer Service</h4>
                <ul>
                  <li><a href="#">Payment Methods</a></li>
                  <li><a href="#">Money-back</a></li>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">Shipping</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1">
              <div className="single-footer social">
                <h4 className="mb-4">Get In Touch</h4>
                
                <div className="social-links">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon href="https://www.facebook.com" target="_blank" key="facebook" icon={faFacebook} />  Facebook
                  </a>
                  <br />
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon href="https://www.facebook.com" target="_blank" key="facebook" icon={faFacebook} /> Twitter
                  </a>
                  <br />
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon href="https://www.facebook.com" target="_blank" key="facebook" icon={faFacebook} />  Instagram
                  </a>
                  {/* Add more social media icons and links as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <p className="legal">© All Right Reserved 2023</p>
    </div>
  );
};

export default Footer;

