import React from "react";
import "./currency-box.scss";

const CurrencyBox = ({ currency }) => {
  return (
    <div className="currency-box">
      <p className="currency-box__title">{currency}</p>
    </div>
  );
};

export default CurrencyBox;
