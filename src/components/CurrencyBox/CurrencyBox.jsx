import React from "react";
import "./currency-box.scss";

const CurrencyBox = ({ currency, icon }) => {
  return (
    <div className="currency-box">
      <img className="currency-box__icon" src={icon} alt="bitcoin" />
      <p className="currency-box__title">{currency}</p>
    </div>
  );
};

export default CurrencyBox;
