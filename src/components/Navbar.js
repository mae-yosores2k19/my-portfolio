// create a react functional component named Navbar.js

import React from "react";
import "../styles/navbar.css";
import { Link  } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Home</Link></li>

      </ul>
    </nav>
  );
};
export default Navbar;
