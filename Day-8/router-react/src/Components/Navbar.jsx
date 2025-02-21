import React from "react";
import '../styles/navbar.css'
import { Link,NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <a className="nav-link logo" href="">
        Shop Swift
      </a>
      <div className="nav-links">
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to='/about' className="nav-link">About</NavLink>
        <NavLink to='/products' className="nav-link">Products</NavLink>
        <NavLink to='/contact' className="nav-link">Contact</NavLink>
      </div>
      <NavLink to='/register' className="nav-link">Register</NavLink>
    </div>
  );
};

export default Navbar;
