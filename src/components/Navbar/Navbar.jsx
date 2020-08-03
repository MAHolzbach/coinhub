import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState();

  const willMount = useRef(true);
  useEffect(() => {
    console.log(willMount);
    window.innerWidth >= 768 ? setIsMobile(false) : setIsMobile(true);
  }, [setIsMobile]);

  window.addEventListener("resize", () => {
    let timeout = false;
    let delay = 250;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      window.innerWidth >= 768 ? setIsMobile(false) : setIsMobile(true);
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
      <div className="mobile-nav">
        <p>MOBILE</p>
        <p className="mobile-nav__link">Dashboard</p>
        <p className="mobile-nav__link">Buy/Sell</p>
        <p className="mobile-nav__link">Account</p>
        <p className="mobile-nav__link">Tools</p>
        <p className="mobile-nav__link">Settings</p>
      </div>
    );
  };

  return (
    <div className="navbar-wrapper">
      {isMobile ? renderMobileNav() : renderDesktopNav()}
    </div>
  );
};

export default Navbar;
