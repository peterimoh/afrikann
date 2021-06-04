import React from "react";
import { Link } from "react-router-dom";
const Heading2 = () => {
  return (
    <nav className="main-navbar" style={{ clear: "both", marginTop: 0 }}>
      <div className="container">
        <ul className="main-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <a href="/">
              Services
            </a>
          </li>
          <li>
            <a href="/">Category</a>
            <ul className="sub-menu">
              <li>
                <Link to="/">Category1</Link>
              </li>
              <li>
                <Link to="#">Category2</Link>
              </li>
              <li>
                <Link to="#">Category3</Link>
              </li>
              <li>
                <Link to="#">Category4</Link>
              </li>
              <li>
                <Link to="#">Category5</Link>
              </li>
            </ul>
          </li>
        
          <li>
            <Link to="/">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Heading2;
