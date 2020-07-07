import React from "react";
import "./currency-box.scss";

const CurrencyBox = ({ currency, icon, price, percentChange }) => {
  return (
    <div className="currency-box">
      <div className="currency-box__header">
        <img className="currency-box__icon" src={icon} alt="bitcoin" />
        <p className="currency-box__title">{currency}</p>
        <p className="currency-box__timeframe">24hr</p>
      </div>
      <div className="currency-box__price-row">
        <p className="currency-box__text currency-box__price">${price}</p>
        <p className="currency-box__text currency-box__percent">
          {percentChange}%
        </p>
      </div>
    </div>
  );
};

export default CurrencyBox;
