import React, { useState } from "react";

import "./appFooter.scss";

import INSTAGRAM from "../../resources/ig-icon.png";
import GMAIL from "../../resources/gmail-icon.png";
import PaymentCards from "../shared/PaymentCards/PaymentCards";

const AppFooter = () => {
  const [copy, setCopy] = useState(false);

  const copyText = !copy ? "Сlick to copy!" : "Copied!";

  return (
    <footer className="footer">
      <h3 className="footer-brand-name">GOODKID-STUDIO™</h3>
      <h3 className="footer-design-text">DESIGN STUDIO</h3>
      <div className="footer-subscribe">
        <p className="footer-subscribe-instagram">Subscribe to our Instagram!</p>
        <a className="footer-ig-button" href="https://www.instagram.com/goodkidstudio">
          <img className="footer-ig-button-logo" src={INSTAGRAM} alt="instagram" />
          <p className="footer-ig-button-text">goodkidstudio</p>
        </a>
        <p className="footer-gmail-text">
          Do you have any questions? Don't be shy!
          <br />
          Send them to our email!
        </p>
        <button
          className="footer-gmail-button"
          onClick={() => {
            navigator.clipboard.writeText("goodkidoffice@gmail.com");
            setCopy(true);
          }} 
        >
          <img className="footer-gmail-logo" src={GMAIL} alt="gmail" />
          <p className="footer-gmail-button-text">{copyText}</p>
        </button>
      </div>
      <div className="footer-payments">
        <PaymentCards />
      </div>
    </footer>
  );
};

export default AppFooter;
