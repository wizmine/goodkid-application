import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Skeleton from "../shared/skeleton/Skeleton";

import "./products.scss";

const Products = ({ products = [] }) => {
  const { categoryId = 1 } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [products]);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {products.map(({ crossedOutPrice, images, price, title, id }) => (
        <div key={id}>
          {loading ? <Skeleton /> : null}
          <Link
            to={`/${categoryId}/${id}`}
            key={id}
            className={`products ${loading ? "loading" : "loaded"}`}
          >
            <div className="products-img">
              <img
                className="products-img-front"
                src={images[0]}
                alt={title}
                onLoad={handleImageLoad}
              />
              {typeof images[1] === "undefined" ? null : (
                <img className="products-img-back" src={images[1]} alt={title} />
              )}
            </div>
            <h2 className="products-text">{title}</h2>
            <div className="products-info-price">
              <h3 className="products-discount">{price}$</h3>
              <h3 className="products-price">{crossedOutPrice}$</h3>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Products;
