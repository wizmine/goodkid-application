import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import INSTAGRAM from "../../resources/ig-icon.png";

import "./transition.scss";

const Transition = (props) => {
  const [copy, setCopy] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [subtotal, setSubtotal] = useState(0);

  const { cartList } = useSelector(({ categories }) => categories);

  const copyText = !copy ? "Click to copy!" : "Copied!";

  const calculateSubtotal = useCallback(() => {
    let sum = 0;
    cartList.forEach(({ price }) => {
      sum += price;
    });
    setSubtotal(sum);
  }, [cartList]);

  useEffect(() => {
    calculateSubtotal();
  }, [cartList, calculateSubtotal]);

  const cartItemsText = cartList
    .map(({ name, price }) => {
      return `Name: ${name}\nPrice: ${price}`;
    })
    .join("\n\n");

  return (
    <div className={`transition ${props.transitionWindow ? "open" : ""}`}>
      <div className="transition-panel">
        <div className="transition-panel-exit">
          <p>Order</p>
          <button
            onClick={() => {
              props.setTransitionWindow(false);
              props.handleHideOverflow();
            }}
          >
            &#10006;
          </button>
        </div>
        <div className="transition-panel-info">
          <p>How to make an order?</p>
          <p>
            By clicking on the button below, the data on the product(s) you want to order is copied.
          </p>
          <button
            className={`transition-panel-info-copy-btn ${isClicked ? "change-color" : ""}`}
            onClick={() => {
              navigator.clipboard.writeText(
                `YOUR ORDER\n\n${cartItemsText}\n\nSUBTOTAL: ${subtotal}$`
              );
              setCopy(true);
              setIsClicked(true);
            }}
          >
            <p className="transition-panel-info-copy-btn-text">{copyText}</p>
          </button>
          <p>
            After that, you need to go to the Instagram DM by clicking on the button below and paste
            the copied message.
          </p>
          <a className="transition-panel-info-ig-button" href="https://ig.me/m/goodkidstudio">
            <img className="transition-panel-info-ig-button-logo" src={INSTAGRAM} alt="instagram" />
            <p className="transition-panel-info-ig-button-text">goodkidstudio</p>
          </a>
          <p>Have a nice shopping!</p>
        </div>
      </div>
    </div>
  );
};

export default Transition;
