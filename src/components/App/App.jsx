import React, { useState, useReducer, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Followed from "../Followed/Followed";
import "./app.scss";
import BitcoinIcon from "../../img/bitcoin-icon.png";
import EtheriumIcon from "../../img/ethereum-icon.png";
import LitecoinIcon from "../../img/litecoin-icon.png";

export const AppContext = React.createContext(null);

const App = () => {
  const initialState = {
    currenciesFollowed: [
      {
        name: "Bitcoin",
        icon: BitcoinIcon,
        price: "----.--",
        percentChange: "0.78",
      },
      {
        name: "Etherium",
        icon: EtheriumIcon,
        price: "----.--",
        percentChange: "0.78",
      },
      {
        name: "Litecoin",
        icon: LitecoinIcon,
        price: "----.--",
        percentChange: "0.78",
      },
      {
        name: "Bitcoin",
        icon: BitcoinIcon,
        price: "----.--",
        percentChange: "0.78",
      },
      {
        name: "Etherium",
        icon: EtheriumIcon,
        price: "----.--",
        percentChange: "0.78",
      },
      {
        name: "Litecoin",
        icon: LitecoinIcon,
        price: "----.--",
        percentChange: "0.78",
      },
    ],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "updateValues":
        let newCurrencyArray = [...state.currenciesFollowed];
        newCurrencyArray[0].price = action.price;
        newCurrencyArray[0].percentChange = action.percentageChange;
        return { ...state };
    }
  };

  const [appState, setAppState] = useReducer(reducer, initialState);

  const calcPriceDifference = (priceA, priceB) => {
    let percentageChange;

    const calcIncrease = () => {
      return ((priceA - priceB) / priceA) * 100;
    };

    const calcDecrease = () => {
      return ((priceB - priceA) / priceB) * 100;
    };

    priceA > priceB
      ? (percentageChange = calcIncrease())
      : (percentageChange = calcDecrease());
    return percentageChange.toFixed(2);
  };

  useEffect(() => {
    // axios
    //   .get(
    //     "https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=1DAY&limit=2",
    //     {
    //       headers: {
    //         "X-CoinAPI-Key": process.env.COINAPIKEY,
    //         Accept: "application/json",
    //       },
    //     }
    //   )
    //   .then((res) => {
    // console.log(res.data);
    setAppState({
      type: "updateValues",
      price: 9051.44,
      percentageChange: calcPriceDifference(9051.44, 9102.11),
    });
    // console.log(res.data);
    // setAppState({
    //   type: "updateValues",
    //   price: res.data[0].price_close,
    //   percentageChange: calcPriceDifference(
    //     res.data[0].price_close,
    //     res.data[1].price_close
    //   ),
    // });
    // });
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
