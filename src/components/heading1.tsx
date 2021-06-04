import React from "react";
import { Link } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux";


const Heading1 = () => {
    let cartItems = useSelector((state:any) => state.cart)
    let numOfCartItems = cartItems.cartItems.length
  return (
    <div className="header-top"  >
      <div className="container">
        <div className="row">
          <div className="col-lg-2 text-center text-lg-left">
            <Link to="/" className="site-logo">
              <img
                src="images/logo.png"
                style={{ display: "none", visibility: "hidden" }}
              />
            </Link>
          </div>

          <div className="col-xl-6 col-lg-5">
            <form className="header-search-form">
              <input type="text" placeholder="Search on PassionPetals ...." />
              <button>
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>

          <div className="col-xl-4 col-lg-5">
            <div className="user-panel">
              <div className="up-item">
                <i
                  className="fa fa-user-plus"
                  style={{ color: "#f51167;" }}
                ></i>
                <a href="#">Sign</a> In or <a href="#">Create Account</a>
              </div>
              <div className="up-item">
                <div className="shopping-card">
                  <i className="fa fa-shopping-cart"></i>
                  <span>{numOfCartItems}</span>
                </div>
                <Link to="/cart">Shopping Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading1;
