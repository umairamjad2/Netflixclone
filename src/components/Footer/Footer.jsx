import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <FaFacebookF className="img facebook" />
        <FaInstagram className="img instagram" />
        <FaTwitter className="img twitter"  />
        <FaYoutube className="img youtube" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li> Contact Us</li>
      </ul>
      <p className="copyright-text"> © 1997-2025 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
