import React from "react";
import "../App.css";

const Heading4 = () => {
  return (
    <section className="top-letest-product-section">
      <div className="container">
        <div className="section-title">
          <h2>LATEST PRODUCTS</h2>
        </div>
        <div
          className="product-slider owl-carousel"
          style={{ backgroundImage: "url(images/fas5.jpg)" }}
        >
          <div
            className="product-item"
            style={{ backgroundImage: "url(images/fas5.jpg)" }}
          >
            <div
              className="pi-pic"
              style={{ backgroundImage: "url(images/fas5.jpg)" }}
            >
              <img
                src="images/fas6.jpg"
                alt="dd"
                style={{ display: "none", visibility: "hidden" }}
              />

              <div className="pi-links">
                <a href="#" className="add-card">
                  <i
                    className="fa fa-shopping-cart"
                    style={{ color: "#f51167" }}
                  ></i>
                  <span> ADD TO CART </span>
                </a>
                <a href="#" className="wishlist-btn">
                  <i className="fas fa-heart" style={{ color: "#f51167" }}></i>
                </a>
              </div>
            </div>
            <div className="pi-text">
              <h6>$35,00</h6>
              <p>Flamboyant Pink Top </p>
            </div>
          </div>
          <div className="product-item">
            <div className="pi-pic">
              <div className="tag-new">New</div>
              <img
                src="images/fas7.png"
                alt="dd"
                style={{ display: "none", visibility: "hidden" }}
              />
              <noscript>
                <img src="images/2.jpg" alt="dd" />
              </noscript>
              <div className="pi-links">
                <a href="#" className="add-card">
                  <i
                    className="fa fa-shopping-cart"
                    style={{ color: "#f51167" }}
                  ></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="#" className="wishlist-btn">
                  <i className="fas fa-heart" style={{ color: "#f51167" }}></i>
                </a>
              </div>
            </div>
            <div className="pi-text">
              <h6>$35,00</h6>
              <p>Light pinky Stripes Dress</p>
            </div>
          </div>
          <div className="product-item">
            <div className="pi-pic">
              <img
                src="images/fas8.jpg"
                alt="dd"
                style={{ display: "none", visibility: "hidden" }}
              />
              <noscript>
                <img src="images/3.jpg" alt="dd" />
              </noscript>
              <div className="pi-links">
                <a href="#" className="add-card">
                  <i
                    className="fa fa-shopping-cart"
                    style={{ color: "#f51167" }}
                  ></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="#" className="wishlist-btn">
                  <i className="fas fa-heart" style={{ color: "#f51167" }}></i>
                </a>
              </div>
            </div>
            <div className="pi-text">
              <h6>$35,00</h6>
              <p>Flamboyant Pink Top </p>
            </div>
          </div>
          <div className="product-item">
            <div className="pi-pic">
              <div className="tag-new">New</div>

              <img
                src="images/fas9.jpg"
                alt="dd"
                style={{ display: "none", visibility: "hidden" }}
              />
              <noscript>
                <img src="images/4.jpg" alt="dd" />
              </noscript>
              <div className="pi-links">
                <a href="#" className="add-card">
                  <i
                    className="fa fa-shopping-cart"
                    style={{ color: "#f51167" }}
                  ></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="#" className="wishlist-btn">
                  <i className="fas fa-heart" style={{ color: "#f51167" }}></i>
                </a>
              </div>
            </div>
            <div className="pi-text">
              <h6>$35,00</h6>
              <p>Flamboyant Pink Top </p>
            </div>
          </div>
          <div className="product-item">
            <div className="pi-pic">
              <img
                src="images/fas20.jpg"
                alt="dd"
                style={{ display: "none", visibility: "hidden" }}
              />
              <noscript>
                <img src="images/6.jpg" alt="dd" />
              </noscript>
              <div className="pi-links">
                <a href="#" className="add-card">
                  <i
                    className="fa fa-shopping-cart"
                    style={{ color: "#f51167" }}
                  ></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="#" className="wishlist-btn">
                  <i className="fas fa-heart" style={{ color: "#f51167" }}></i>
                </a>
              </div>
            </div>
            <div className="pi-text">
              <h6>$35,00</h6>
              <p>Flamboyant Pink Top </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heading4;
