import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { getProductById, productAdded } from "../../actions";

import Transition from "../Transition/Transition";
import PaymentCards from "./../shared/PaymentCards/PaymentCards";

import ARROW_RIGHT from "../../resources/arrow-right.png";
import ARROW_LEFT from "../../resources/arrow-left.png";
import CART from "../../resources/cart.jpg";

import "./singlePage.scss";

const SinglePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [transitionProduct, setTransitionProduct] = useState(false);
  const [transitionWindow, setTransitionWindow] = useState(false);
  const [isHiddenOverflow, setIsHiddenOverflow] = useState(false);

  const dispatch = useDispatch();
  const { categories, cartList } = useSelector(({ categories }) => categories);
  const { productId, categoryId } = useParams();

  const product = getProductById(categories, categoryId, productId);
  const { title, price, crossedOutPrice, id } = product;

  const handleHideOverflow = () => {
    setIsHiddenOverflow(!isHiddenOverflow);
  };

  const images = product.images;
  const TOTAL_SLIDES = images.length;

  const nextImage = () => {
    setCurrentImage((prevCurrent) => (prevCurrent + 1) % TOTAL_SLIDES);
    setTransitionProduct(true);
  };

  const prevImage = () => {
    setCurrentImage((prevCurrent) => (prevCurrent - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
    setTransitionProduct(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const addProduct = {
      id: id,
      name: title,
      price: price,
    };

    const isProductAlreadyAdded = cartList.some((product) => product.id === addProduct.id);

    if (isProductAlreadyAdded) {
      return;
    }

    dispatch(productAdded(addProduct));
  };

  return (
    <>
      <Helmet>
        <meta name="description" content={`${title}`} />
        <title>{title}</title>
      </Helmet>
      <div className="single-item">
        {isHiddenOverflow ? <style>{`body { overflow: hidden; }`}</style> : null}
        <div className="wrapper">
          <div className="frame">
            <div className="arrow-container">
              <img src={ARROW_LEFT} alt="arrow left" className="arrow" onClick={prevImage} />
              <img src={ARROW_RIGHT} alt="arrow right" className="arrow" onClick={nextImage} />
            </div>
            <div className="box-container">
              {images.map((image, index) => (
                <img
                  key={index}
                  className="box"
                  style={{
                    transform: `translateX(-${currentImage * 100}%)`,
                    transition: transitionProduct ? "transform 0.3s ease-in-out" : "none",
                  }}
                  src={image}
                  alt="item"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="single-item-info">
          <h3 className="single-item-name">"{title}"</h3>
          <div className="single-item-value">
            <p className="single-item-value-on-sale">ON SALE</p>
            <div className="single-item-value-info">
              <h3 className="single-item-value-price">${price}</h3>
              <p className="single-item-value-sale">${crossedOutPrice}</p>
              <div className="single-item-value-buttons">
                <form onSubmit={onSubmitHandler}>
                  <button
                    className="single-item-value-buy"
                    onClick={() => {
                      setTransitionWindow(!transitionWindow);
                      handleHideOverflow();
                    }}
                  >
                    BUY
                  </button>
                </form>
                <Transition
                  transitionWindow={transitionWindow}
                  setTransitionWindow={setTransitionWindow}
                  handleHideOverflow={handleHideOverflow}
                />
                <form onSubmit={onSubmitHandler}>
                  <button className="single-item-value-cart">
                    <img className="single-item-value-cart-img" src={CART} alt="cart" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="single-item-description">
            <p className="single-item-description-text">
              You will get:
              <br />
              - Mockups High Resolution (4000x4000)
              <br />
              - Design files in different formats (PNG, AI, PSD, JPEG)
              <br />- Private access to VIP group
            </p>
          </div>
          <div className="single-item-border" />
          <div className="single-item-payments">
            <PaymentCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
