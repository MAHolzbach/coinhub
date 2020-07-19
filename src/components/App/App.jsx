import React, { useState, useReducer, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Followed from "../Followed/Followed";
import "./app.scss";
import BitcoinIcon from "../../img/bitcoin-icon.png";
import EthereumIcon from "../../img/ethereum-icon.png";
import LitecoinIcon from "../../img/litecoin-icon.png";

export const AppContext = React.createContext(null);

const App = () => {
  const initialState = {
    allowFetches: true,
    currenciesFollowed: [
      {
        name: "Bitcoin",
        coinId: "BTC",
        assetId: "USD",
        icon: BitcoinIcon,
        price: "----.--",
        plusOrMinus: "",
        percentChange: "-.--",
      },
      {
        name: "Ethereum",
        coinId: "ETH",
        assetId: "USD",
        icon: EthereumIcon,
        price: "----.--",
        plusOrMinus: "",
        percentChange: "-.--",
      },
      {
        name: "Litecoin",
        coinId: "LTC",
        assetId: "USD",
        icon: LitecoinIcon,
        price: "----.--",
        plusOrMinus: "",
        percentChange: "-.--",
      },
    ],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "updateValues":
        let newCurrencyArray = [...state.currenciesFollowed];
        newCurrencyArray[action.index].price = action.price;
        newCurrencyArray[action.index].percentChange = action.percentageChange;
        newCurrencyArray[action.index].plusOrMinus = action.plusOrMinus;
        return { ...state };
    }
  };

  const [appState, setAppState] = useReducer(reducer, initialState);

  const calcPriceDifference = (a, b) => {
    let percentageChange;
    let plusOrMinus;

    const calcDiff = (a, b) => {
      return ((a - b) / a) * 100;
    };

    a > b
      ? ((percentageChange = calcDiff(a, b)), (plusOrMinus = "+"))
      : ((percentageChange = calcDiff(b, a)), (plusOrMinus = "-"));
    return { change: percentageChange.toFixed(2), plusOrMinus };
  };

  useEffect(() => {
    appState.currenciesFollowed.map((currency, index) => {
      initialState.allowFetches
        ? axios
            .get(
              `https://rest.coinapi.io/v1/ohlcv/${currency.coinId}/${currency.assetId}/latest?period_id=1DAY&limit=2`,
              {
                headers: {
                  "X-CoinAPI-Key": process.env.COINAPIKEY,
                  Accept: "application/json",
                },
              }
            )
            .then((res) => {
              console.log("RES.DATA:", res.data);
              setAppState({
                type: "updateValues",
                price: res.data[0].price_close,
                percentageChange: calcPriceDifference(
                  res.data[0].price_close,
                  res.data[1].price_close
                ),
                index: index,
              });
            })
        : setAppState({
            type: "updateValues",
            price: 9251.44,
            percentageChange: calcPriceDifference(9251.44, 9102.11),
          });
    });
  }, []);

  return (
    <AppContext.Provider value={appState}>
      <div>
        <Header />
        <Followed />
      </div>
    </AppContext.Provider>
  );
};

export default App;
