import React, { useState } from "react";

import "./navbar.scss";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuOpen, setMenuOpen] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      setIsMobile(false);
      setMenuOpen(false);
    } else {
      setIsMobile(true);
    }
  });

  const renderDesktopNav = () => {
    return (
      <div className="desktop-nav">
        <div className="desktop-nav__link">
          <p>Dashboard</p>
        </div>
        <div className="desktop-nav__link">
          <p>Buy/Sell</p>
        </div>
        <div className="desktop-nav__link">
          <p>Account</p>
        </div>
        <div className="desktop-nav__link">
          <p>Tools</p>
        </div>
        <div className="desktop-nav__link">
          <p>Settings</p>
        </div>
      </div>
    );
  };

  const renderMobileNav = () => {
    return (
      menuOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav__link">
            <p>Dashboard</p>
          </div>
          <div className="mobile-nav__link">
            <p>Buy/Sell</p>
          </div>
          <div className="mobile-nav__link">
            <p>Account</p>
          </div>
          <div className="mobile-nav__link">
            <p>Tools</p>
          </div>
          <div className="mobile-nav__link">
            <p>Settings</p>
          </div>
        </div>
      )
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
    <div className={`navbar-wrapper ${menuOpen ? "navbar-wrapper--open" : ""}`}>
      {isMobile ? renderBurger() : renderDesktopNav()}
      {menuOpen && renderMobileNav()}
    </div>
  );
};

export default Navbar;
