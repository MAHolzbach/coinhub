import React, { useContext } from "react";
import { AppContext } from "../App/App";
import "./header.scss";

const Header = () => {
  const context = useContext(AppContext);
  return (
    <div>
      <h1 className="app-name">CoinHub</h1>
    </div>
  );
};

export default Header;
