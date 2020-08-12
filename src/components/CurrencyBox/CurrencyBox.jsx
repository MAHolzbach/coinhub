import React from "react";
import "./currency-box.scss";

import Spinner from "../Spinner/Spinner";

const CurrencyBox = ({ currency, icon, price, percentChange, showSpinner }) => {
  if (price >= 1) {
    price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="currency-box">
      {!showSpinner ? (
        <>
          <div className="currency-box__header">
            <img className="currency-box__icon" src={icon} alt="icon" />
            <p className="currency-box__title">{currency}</p>
            <p className="currency-box__timeframe">24hr</p>
          </div>
          <div className="currency-box__price-row">
            <p className="currency-box__text currency-box__price">${price}</p>
            <p
              className={`currency-box__text currency-box__percent ${
                percentChange.plusOrMinus === "+"
                  ? "positive-color"
                  : "negative-color"
              }`}
            >
              <span className="currency-box__text currency-box__percent__plusminus">
                {percentChange.plusOrMinus}
              </span>
              {percentChange.change}%
            </p>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CurrencyBox;
