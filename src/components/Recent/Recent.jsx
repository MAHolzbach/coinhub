import React from "react";
import "./recent.scss";

const Recent = ({ icon }) => {
  return (
    <div className="recent-wrapper">
      <p className="recent-wrapper__title">Recent Activity</p>
      <div className="recent-wrapper__transactions">
        <img src={icon} alt={icon} className="transactions__icon" />
        <p className="transactions__title">No Transactions Yet</p>
        <p className="transactions__text">
          There are lots of different ways to participate in the crypto currency
          ecosystem.
        </p>
        <button className="transactions__button">Learn More</button>
      </div>
    </div>
  );
};

export default Recent;
