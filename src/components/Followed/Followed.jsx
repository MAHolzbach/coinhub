import React, { useContext } from "react";
import CurrencyBox from "../CurrencyBox/CurrencyBox";
import "./followed.scss";

import { AppContext } from "../App/App";

const Followed = () => {
  const context = useContext(AppContext);
  const currenciesFollowed = context.currenciesFollowed;

  const renderFollowedCurrencies = () => {
    return (
      <>
        {currenciesFollowed.map((currency) => (
          <CurrencyBox
            key={currency.name}
            currency={currency.name}
            icon={currency.icon}
            price={currency.price}
            percentChange={currency.percentChange}
          />
        ))}
      </>
    );
  };

  return (
    <div className="followed-wrapper">
      <p className="followed-wrapper__title">Following</p>
      <div className="currency-box__wrapper">{renderFollowedCurrencies()}</div>
    </div>
  );
};

export default Followed;
