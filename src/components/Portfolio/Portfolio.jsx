import React, { useContext, useEffect, useState } from "react";
import CanvasJSReact from "../../lib/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import { AppContext } from "../App/App";

import "./portfolio.scss";

const Portfolio = () => {
  const context = useContext(AppContext);
  const currenciesFollowed = context.currenciesFollowed;

  const generateOptions = (currency) => {
    let options = {
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
            { y: currency.history[0].price_close },
            { y: currency.history[1].price_close },
            { y: currency.history[2].price_close },
            { y: currency.history[3].price_close },
            { y: currency.history[4].price_close },
            { y: currency.history[5].price_close },
            { y: currency.history[6].price_close },
          ],
        },
      ],
    };
    return options;
  };

  const emptyHistory = (item) => item.history.length === 0;

  return (
    <div className="portfolio-wrapper">
      <p className="portfolio-wrapper__title">Portfolio</p>
      {currenciesFollowed.findIndex(emptyHistory) === -1
        ? currenciesFollowed.map((currency) => {
            return <CanvasJSChart options={generateOptions(currency)} />;
          })
        : ""}
    </div>
  );
};

export default Portfolio;
