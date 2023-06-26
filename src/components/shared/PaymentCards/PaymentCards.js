import React from "react";

import AE from "../../../resources/ae-icon.png";
import MAESTRO from "../../../resources/maestro-icon.png";
import MASTERCARD from "../../../resources/mastercard-icon.png";
import PAYPAL from "../../../resources/paypal-icon.png";
import VISA from "../../../resources/visa-icon.png";
import WU from "../../../resources/wu-icon.png";

import "./paymentCards.scss";

const PaymentCards = () => {
  return (
    <div className="payments">
      <img className="payments-card" src={AE} alt="American Express" />
      <img className="payments-card" src={MAESTRO} alt="Maestro" />
      <img className="payments-card" src={MASTERCARD} alt="Mastercard" />
      <img className="payments-card" src={PAYPAL} alt="Paypal" />
      <img className="payments-card" src={VISA} alt="Visa" />
      <img className="payments-card" src={WU} alt="Western Union" />
    </div>
  );
};

export default PaymentCards;
