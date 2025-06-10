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
        <img src={logo} alt="" />
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
