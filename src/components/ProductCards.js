import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import preloader from '../components/preloader.gif'
import  URL  from '../constant/url'
import Card from "./Cards";
import { getProducts } from "../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";

const CardView = (props) => {

  const dispatch = useDispatch();
  const getProduct = useSelector((state) => state.getProduct);
  const [feature, setFeatured] = useState([]);
  const { products, loading, error } = getProduct;

useEffect(async() => {
  axios
      .get(URL)
      .then((res) => {
        console.log(res)
        setFeatured(res.data);
      })
      .catch((error) => setFeatured([]));
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>

      <section className="product-filter-section">
        <div className="container">
          
            <center >
          <div className="row">
            {loading ? (

                <img alt="Loading products" src={preloader} style={{margin: '20px auto'}}  />
            ) : error ? (
              <h1>No Product Found</h1>
            ) : (
              feature.map((prod) => {
                const {id, title, image}= prod
                return <Card key={id} {...prod} />;
              })
            )}
          </div>
              </center>

        </div>
      </section> 
    </>
  );
};

export default CardView;
