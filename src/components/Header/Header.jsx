import React from "react";

import "./header.scss";

import SearchIcon from "../../img/search-icon.png";
import AlertsIcon from "../../img/alerts-icon.png";
import AccountIcon from "../../img/account-icon.png";

const Header = () => {
  return (
    <div className="header-wrapper">
      <img src={SearchIcon} alt="search" className="header-wrapper__icon" />
      <img src={AlertsIcon} alt="alerts" className="header-wrapper__icon" />
      <img
        src={AccountIcon}
        alt="alerts"
        className="header-wrapper__icon header-wrapper__user-icon"
      />
      <div className="header-wrapper__user-info">
        <p className="user-info__text user-info__name">John Doe</p>
        <p className="user-info__text user-info__title">Admin</p>
      </div>
    </div>
  );
};

export default Header;
