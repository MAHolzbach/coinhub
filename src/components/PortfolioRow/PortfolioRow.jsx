import React from "react";
import CanvasJSReact from "../../lib/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import "./portfolio-row.scss";

const PortfolioRow = ({ options, icon, name, quantity, coinId, price }) => {
  return (
    <div className="portfolio-wrapper__chart-wrapper">
      <img className="chart-wrapper__icon" src={icon} alt="icon" />
      <p className="chart-wrapper__name">{name}</p>
      <div className="chart-wrapper__chart">
        <CanvasJSChart options={options} />
      </div>
      <p className="chart-wrapper__quantity">{`${quantity} ${coinId}`}</p>
      <p className="chart-wrapper__value">
        {"$" +
          (price * quantity).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </p>
    </div>
  );
};

export default PortfolioRow;
