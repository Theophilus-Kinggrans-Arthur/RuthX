import React from "react";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import ruthx from "../../assets/ruthx.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull;About</a>
            <a href="#">&bull;Learn</a>
            <a href="#">&bull;Hosting</a>
            <a href="#">&bull;Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull;About</a>
            <a href="#">&bull;Learn</a>
            <a href="#">&bull;Hosting</a>
            <a href="#">&bull;Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-contact">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Ghana.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +233 550302740.
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +233553940971
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: info@ruthx.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.ruthx.com
            </p>
          </div>
        </div>
        <div className="footer-box">
          <img src={ruthx} alt="ruthx" />
          <p className="u-text-small"> &copy; Copyright 2022. Ruthx.com </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
