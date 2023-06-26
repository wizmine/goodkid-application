import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import Products from "../Products/Products";
import { getCategoryById } from "../../actions";

import "./appHome.scss";
import "./../../style/fade.scss";

const AppHome = () => {
  const { categoryId } = useParams();
  const { categories } = useSelector(({ categories }) => categories);

  const category = getCategoryById(categories, categoryId);
  const products =
    typeof categoryId === "undefined" ? (
      <Products products={categories[0].products} />
    ) : (
      <Products products={category.products} />
    );

  const categoryName = typeof categoryId === "undefined" ? categories[0].name : category.name;

  return (
    <section className="section-content">
      <Helmet>
        <meta name="description" content={`Page with category "${categoryName}"`} />
        <title>GOODKID STUDIO</title>
      </Helmet>
      {typeof products.props.products === "undefined" ? (
        <div className="empty-block">
          <p>Products not found</p>
        </div>
      ) : (
        <div className="product-container">{products}</div>
      )}
    </section>
  );
};

export default AppHome;
