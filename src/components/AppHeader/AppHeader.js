import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import "./appHeader.scss";

import LOGO from "../../resources/logo.png";
import BURGER from "../../resources/burger.png";
import CART from "../../resources/cart.jpg";

import Burger from "../Burger/Burger";
import Cart from "../Cart/Cart";

const AppHeader = () => {
  const [burger, setBurger] = useState(false);
  const [cart, setCart] = useState(false);
  const [isHiddenOverflow, setIsHiddenOverflow] = useState(false);

  const { cartList } = useSelector(({ categories }) => categories);

  const handleHideOverflow = () => {
    setIsHiddenOverflow(!isHiddenOverflow);
  };

  return (
    <div className="header">
      {isHiddenOverflow ? <style>{`body { overflow: hidden; }`}</style> : null}
      <button
        className="header-burger-btn"
        onClick={() => {
          setBurger(!burger);
          handleHideOverflow();
        }}
      >
        <img src={BURGER} alt="burger" />
      </button>
      <Burger burger={burger} setBurger={setBurger} handleHideOverflow={handleHideOverflow} />
      <div className="header-logo">
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="GOODKID" />
        </Link>
      </div>
      <button
        className="header-cart-btn"
        onClick={() => {
          setCart(!cart);
          handleHideOverflow();
        }}
      >
        <img src={CART} alt="cart" />
        <span className={`header-cart-btn-count ${cartList.length === 0 ? "close" : ""}`}>{cartList.length}</span>
      </button>
      <Cart cart={cart} setCart={setCart} handleHideOverflow={handleHideOverflow} />
    </div>
  );
};

export default AppHeader;
