import React, { useContext } from "react";
import { AppContext } from "../App/App";
import "./header.scss";

const Header = () => {
  const context = useContext(AppContext);
  const currency = context.currency;
  return (
    <div>
      <p className="currency-name">{currency}</p>
    </div>
  );
};

export default Header;
