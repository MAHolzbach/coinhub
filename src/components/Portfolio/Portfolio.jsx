import React from "react";
import CanvasJSReact from "../../lib/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import "./portfolio.scss";

const Portfolio = () => {
  const options = {
    axisY: {
      includeZero: false,
      gridColor: "white",
      lineColor: "white",
      tickColor: "white",
      labelFontColor: "white",
      margin: 0,
    },
    axisX: {
      includeZero: false,
      gridColor: "white",
      lineColor: "white",
      tickColor: "white",
      labelFontColor: "white",
      margin: 0,
    },
    width: 200,
    height: 75,
    data: [
      {
        type: "spline",
        dataPoints: [
          { y: 9313.25 },
          { y: 9213.25 },
          { y: 9345.25 },
          { y: 9387.22 },
          { y: 9100.11 },
          { y: 9445.9 },
          { y: 9277.88 },
        ],
      },
    ],
  };
  return (
    <div className="portfolio-wrapper">
      <p className="portfolio-wrapper__title">Portfolio</p>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Portfolio;
