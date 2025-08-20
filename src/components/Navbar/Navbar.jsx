import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return; // Defensive check

      if (window.scrollY >= 100) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY >= 80) {
  //       navRef.current.classList.add("nav-dark")
  //     } else {
  //       navRef.current.classList.remove("nav-dark")
  //     }
  //   });
  // }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="netflix icon" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <FaSearch className="icons" />
        <p>Children</p>
        <FaRegBell className="icons" />
        <div className="navbar-profile">
          <FaCaretDown className="icons" />
          <path
            id="Vector_7"
            d="M27.6 32.4016C27.6 29.7506 29.749 27.6016 32.4 27.6016L57.6 27.6016C60.2508 27.6016 62.4 29.7506 62.4 32.4016V57.6015C62.4 60.2524 60.2508 62.4016 57.6 62.4016H32.4C29.749 62.4016 27.6 60.2524 27.6 57.6016V32.4016Z"
            fill="url(#paint6_radial_5179_7919)"
          ></path>
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
