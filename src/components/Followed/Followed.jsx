import React, { useContext } from "react";
import { AppContext } from "../App/App";
import CurrencyBox from "../CurrencyBox/CurrencyBox";
import "./followed.scss";

const Followed = () => {
  const context = useContext(AppContext);
  const currenciesFollowed = context.currenciesFollowed;

  const renderFollowedCurrencies = () => {
    return (
      <>
        {currenciesFollowed.map((currency) => (
          <CurrencyBox currency={currency.name} icon={currency.icon} />
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
