import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import addToCarts from "../utils/addToCart";
import { getProducts } from "../redux/actions/productAction";

import PremiumCardHandler from "../utils/products";

const Premium = (props) => {
  let dispatch = useDispatch();

  const { products, loading, error } = props;
  let added = addToCarts(useDispatch, useSelector);

  return (
    <>
      {loading === true ? (
        <h1>"loading..."</h1>
      ) : (
        products
          .filter((prod) => prod.isFeatured === "true")
          .map((items) => {
            return (
              <div className="product-item">
                <div className="pi-pic">
                  <div className="tag-new">New</div>
                  <img src={"http://localhost:8080/" + items.image} alt="dad" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <i
                        className="fa fa-shopping-cart"
                        style={{ color: "#f51167" }}
                      ></i>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => added(`${items.id}`)}
                      >
                        ADD TO CART
                      </span>
                    </a>

                    <Link to={`/product/${items.id}`} className="wishlist-btn">
                      <i
                        className="fas fa-eye"
                        style={{ color: "#f51167" }}
                      ></i>
                    </Link>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>#{items.price}</h6>
                  <p>{items.name}</p>
                </div>
              </div>
            );
          })
      )}
    </>
  );
};

export default Premium;
