import React, { useContext } from "react";
import PortfolioRow from "../PortfolioRow/PortfolioRow";

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
        margin: -35,
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
      toolTip: {
        content: "${y}",
      },
      data: [
        {
          type: "spline",
          markerType: "none",
          dataPoints: [
            { y: currency.history[6].price_close },
            { y: currency.history[5].price_close },
            { y: currency.history[4].price_close },
            { y: currency.history[3].price_close },
            { y: currency.history[2].price_close },
            { y: currency.history[1].price_close },
            { y: currency.history[0].price_close },
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
      <div className="portfolio-wrapper__row-wrapper">
        {currenciesFollowed.findIndex(emptyHistory) === -1
          ? currenciesFollowed.map((currency) => {
              return (
                <PortfolioRow
                  options={generateOptions(currency)}
                  icon={currency.icon}
                  name={currency.name}
                  quantity={currency.quantity}
                  coinId={currency.coinId}
                  price={currency.history[0].price_close}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Portfolio;
