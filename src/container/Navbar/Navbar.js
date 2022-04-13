import React from "react";
import { NavLink } from "react-router-dom";
import "./Nabar.css";
import { useSelector } from "react-redux";
function Navbar() {
  var Addtocartitem = useSelector((state) => state);
  return (
    <>
      <nav>
        <div className="logo">
          <h5>Online store</h5>
        </div>
        <div className="hamburger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-links">
          <li>
            {" "}
           
          </li>
          <li>
            <NavLink to="/userlogin" className="navlink">
              Login
            </NavLink>
          </li>
          <li>
           
          </li>
          <li>

          </li>
          <li>
            <button className="logout-button">
              {" "}
             
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
