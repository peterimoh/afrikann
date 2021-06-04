import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const Cards = (props: any) => {
  let { id, image, title } = props;
  const dispatch = useDispatch();
  let product = useSelector((state: any) => state.getProduct);

  return (
    
    
    <div className="col-lg-4 col-sm-4" style={{marginTop: 80}}>
      <div className="product-item">
        <div className="pi-pic">
          <div className="tag-sale">ON SALE</div>
          <img
            src={image}
            alt="image"
 
          /> 
          <div className="pi-links">
            <a className="add-card">
              <i
                className="fas fa-eye"
                style={{ color: "#f51167" }}
              ></i>
              <span
                style={{ cursor: "pointer" }}
              >
                View More 
              </span>
            </a>
          </div>
        </div>
        <div className="pi-text">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
