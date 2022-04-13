import React from "react";
import { NavLink } from "react-router-dom";
import "./Nabar.css";
import { useSelector } from "react-redux";
import { Form } from 'formik';
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
            <NavLink to="/" className="navlink">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/userlogin" className="navlink">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/usersignup" className="navlink">
              Signup
            </NavLink>
          </li>
          <li>
            <button className="cart-button">
              <NavLink to="/shoppingcart">
                <span className="counter">
                  {Addtocartitem.AddtoCartProductsreducer.length}
                </span>
                <i
                  className="fa fa-shopping-cart cart-icon "
                  aria-hidden="true"
                  style={{ color: "white", fontSize: "22px" }}
                />
              </NavLink>{" "}
            </button>
          </li>
          <li>
            <button className="logout-button">
              {" "}
              <NavLink to="/logout" className="logout-link">
                Logout
              </NavLink>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
