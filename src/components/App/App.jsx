import React, { useState, useReducer, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Followed from "../Followed/Followed";
import Portfolio from "../portfolio/Portfolio";
import Recent from "../recent/Recent";
import "./app.scss";
import BitcoinIcon from "../../img/bitcoin-icon.png";
import EthereumIcon from "../../img/ethereum-icon.png";
import LitecoinIcon from "../../img/litecoin-icon.png";
import BitcoinCashIcon from "../../img/bitcoincash-icon.png";
import RippleIcon from "../../img/ripple-icon.png";
import EosIcon from "../../img/eos-icon.png";

import dummyResponse from "../../../dummyResponse";

export const AppContext = React.createContext(null);

const App = () => {
  const initialState = {
    allowFetches: false,
    currenciesFollowed: [
      {
        name: "Bitcoin",
        coinId: "BTC",
        assetId: "USD",
        icon: BitcoinIcon,
        price: "----.--",
        percentChange: "-.--",
        history: [],
      },
      {
        name: "Ethereum",
        coinId: "ETH",
        assetId: "USD",
        icon: EthereumIcon,
        price: "----.--",
        percentChange: "-.--",
        history: [],
      },
      {
        name: "Litecoin",
        coinId: "LTC",
        assetId: "USD",
        icon: LitecoinIcon,
        price: "----.--",
        percentChange: "-.--",
        history: [],
      },
      {
        name: "Bitcoin Cash",
        coinId: "BCH",
        assetId: "USD",
        icon: BitcoinCashIcon,
        price: "----.--",
        percentChange: "-.--",
        history: [],
      },
      {
        name: "Ripple (XRP)",
        coinId: "XRP",
        assetId: "USD",
        icon: RippleIcon,
        price: "----.--",
        percentChange: "-.--",
        history: [],
      },
      {
        name: "EOS",
        coinId: "EOS",
        assetId: "USD",
        icon: EosIcon,
        price: "----.--",
        percentChange: "-.--",
        history: [],
      },
    ],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "updateValues":
        let newCurrencyArray = [...state.currenciesFollowed];
        newCurrencyArray[action.index].price = action.price;
        newCurrencyArray[action.index].percentChange = action.percentageChange;
        newCurrencyArray[action.index].history = action.history;
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
    initialState.allowFetches
      ? appState.currenciesFollowed.map((currency, index) => {
          axios
            .get(
              `https://rest.coinapi.io/v1/ohlcv/${currency.coinId}/${currency.assetId}/latest?period_id=1DAY&limit=7`,
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
                history: res.data,
                index: index,
              });
            });
        })
      : dummyResponse.map((currency, index) => {
          setAppState({
            type: "updateValues",
            price: currency[0].price_close,
            percentageChange: calcPriceDifference(
              currency[0].price_close,
              currency[1].price_close
            ),
            history: currency,
            index: index,
          });
        });
  }, []);

  return (
    <AppContext.Provider value={appState}>
      <div>
        <Header />
        <Followed />
        <div className="app-bottom-row">
          <Portfolio />
          <Recent />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
