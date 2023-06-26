import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { productDeleted } from "../../actions";

import Transition from "../Transition/Transition";

import ITEM from "../../resources/item.jpg";

import "./cart.scss";

const Cart = (props) => {
  const [transitionWindow, setTransitionWindow] = useState(false);
  const [isHiddenOverflow, setIsHiddenOverflow] = useState(false);
  const [subtotal, setSubtotal] = useState(0);

  const handleHideOverflow = () => {
    setIsHiddenOverflow(!isHiddenOverflow);
  };

  const { cartList } = useSelector(({ categories }) => categories);
  const dispatch = useDispatch();

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

  const onDelete = useCallback(
    (id) => {
      dispatch(productDeleted(id));
    },
    [dispatch]
  );

  return (
    <div className={`cart ${props.cart ? "open" : ""}`}>
      {isHiddenOverflow ? <style>{`body { overflow: hidden; }`}</style> : null}
      <div className={`cart-panel ${props.cart ? "open-panel" : ""}`}>
        <div className="cart-panel-exit">
          <p className="cart-panel-text">Cart</p>
          <button
            onClick={() => {
              props.setCart(!props.cart);
              props.handleHideOverflow();
            }}
          >
            &#10006;
          </button>
        </div>
        <div className="cart-inner">
          <div className="cart-items">
            {cartList.map(({ price, name, id }) => (
              <div key={id} className="cart-items-item">
                <img src={ITEM} alt="item" className="cart-items-item-picture" />
                <div className="cart-items-item-right-block">
                  <div className="cart-items-item-info">
                    <h3 className="cart-items-item-info-text">{name}</h3>
                  </div>
                  <div className="cart-items-item-info-bottom">
                    <h3 className="cart-items-item-info-price">{price}$</h3>
                    <button
                      className="cart-items-item-info-remove-btn"
                      onClick={() => onDelete(id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-checkout">
            <div className="cart-checkout-subtotal">
              <p className="cart-checkout-subtotal-text">SUBTOTAL</p>
              <h3 className="cart-checkout-subtotal-price">{subtotal}$</h3>
            </div>
            <button
              className="cart-checkout-btn"
              onClick={() => {
                setTransitionWindow(!transitionWindow);
                handleHideOverflow();
              }}
            >
              CHECK OUT
            </button>
          </div>
        </div>
      </div>
      <Transition
        transitionWindow={transitionWindow}
        setTransitionWindow={setTransitionWindow}
        handleHideOverflow={handleHideOverflow}
      />
    </div>
  );
};

export default Cart;
