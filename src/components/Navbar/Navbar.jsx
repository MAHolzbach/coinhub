import React, { useState } from "react";

import "./navbar.scss";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuOpen, setMenuOpen] = useState(false);

  window.addEventListener("resize", () => {
    let timeout = false;
    let delay = 250;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      window.innerWidth >= 1024 ? setIsMobile(false) : setIsMobile(true);
    }, delay);
  });

  const renderDesktopNav = () => {
    return (
      <div className="desktop-nav">
        <p>DESKTOP</p>
        <p className="desktop-nav__link">Dashboard</p>
        <p className="desktop-nav__link">Buy/Sell</p>
        <p className="desktop-nav__link">Account</p>
        <p className="desktop-nav__link">Tools</p>
        <p className="desktop-nav__link">Settings</p>
      </div>
    );
  };

  const renderMobileNav = () => {
    return (
      menuOpen && (
        <div className="mobile-nav">
          <p>MOBILE</p>
          <p className="mobile-nav__link">Dashboard</p>
          <p className="mobile-nav__link">Buy/Sell</p>
          <p className="mobile-nav__link">Account</p>
          <p className="mobile-nav__link">Tools</p>
          <p className="mobile-nav__link">Settings</p>
        </div>
      )
    );
  };

  const renderBurger = () => {
    return (
      <div className="burger-wrapper" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="burger-patty"></div>
        <div className="burger-patty"></div>
        <div className="burger-patty"></div>
      </div>
    );
  };

  return (
    <div className="navbar-wrapper">
      {isMobile ? renderBurger() : renderDesktopNav()}
      {menuOpen && renderMobileNav()}
    </div>
  );
};

export default Navbar;
