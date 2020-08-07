import React, { useState } from "react";

import "./navbar.scss";

import DashboardIcon from "../../img/dashboard-icon.png";
import BuySellIcon from "../../img/buy-sell-icon.png";
import AccountIcon from "../../img/account-icon.png";
import ToolsIcon from "../../img/tools-icon.png";
import SettingsIcon from "../../img/settings-icon.png";
import CoinhubLogo from "../../img/coinhub-logo.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("dashboard");

  const navLinks = [
    {
      key: "dashboard",
      text: "Dashboard",
      icon: DashboardIcon,
    },
    {
      key: "buySell",
      text: "Buy/Sell",
      icon: BuySellIcon,
    },
    {
      key: "account",
      text: "Account",
      icon: AccountIcon,
    },
    {
      key: "tools",
      text: "Tools",
      icon: ToolsIcon,
    },
    {
      key: "settings",
      text: "Settings",
      icon: SettingsIcon,
    },
  ];

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      setIsMobile(false);
      setMenuOpen(false);
    } else {
      setIsMobile(true);
    }
  });

  const renderNav = (type) => {
    return (
      <div className={`${type}-nav`}>
        {navLinks.map((link) => (
          <div
            key={link.key}
            className={`${type}-nav__link ${
              activeLink === link.key
                ? `${type === "desktop" ? "desktop" : "mobile"}-nav--active`
                : ""
            }`}
          >
            <img
              src={link.icon}
              alt={link.key}
              className={`nav-icon ${
                activeLink === link.key ? "nav-icon--active" : ""
              }`}
            />
            <p>{link.text}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderBurger = () => {
    return (
      <div
        className="burger-wrapper"
        onClick={() => setMenuOpen(!menuOpen)}
        onDoubleClick={() => setMenuOpen(!menuOpen)}
      >
        <div className={`burger-patty ${menuOpen ? "top-patty-x" : ""}`}></div>
        <div
          className={`burger-patty ${menuOpen ? "middle-patty-x" : ""}`}
        ></div>
        <div
          className={`burger-patty ${menuOpen ? "bottom-patty-x " : ""}`}
        ></div>
      </div>
    );
  };

  return (
    <div>
      <div
        className={`navbar-wrapper ${menuOpen ? "navbar-wrapper--open" : ""}`}
      >
        <div className="coinhub-logo">
          <img src={CoinhubLogo} className="coinhub-logo__img"></img>
          <h2 className="coinhub-logo__name">CoinHub</h2>
        </div>
        {isMobile ? renderBurger() : renderNav("desktop")}
      </div>
      {menuOpen && renderNav("mobile")}
    </div>
  );
};

export default Navbar;
