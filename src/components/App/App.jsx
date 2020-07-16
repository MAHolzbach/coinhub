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
  const [appState, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "updateValues":
          let newCurrencyArray = [...state.currenciesFollowed];
          newCurrencyArray[0].price = action.price;
          return { ...state };
      }
    },
    {
      currenciesFollowed: [
        {
          name: "Bitcoin",
          icon: BitcoinIcon,
          price: "3,123.45",
          percentChange: "0.78",
        },
        {
          name: "Etherium",
          icon: EtheriumIcon,
          price: "3,123.45",
          percentChange: "0.78",
        },
        {
          name: "Litecoin",
          icon: LitecoinIcon,
          price: "3,123.45",
          percentChange: "0.78",
        },
        {
          name: "Bitcoin",
          icon: BitcoinIcon,
          price: "3,123.45",
          percentChange: "0.78",
        },
        {
          name: "Etherium",
          icon: EtheriumIcon,
          price: "3,123.45",
          percentChange: "0.78",
        },
        {
          name: "Litecoin",
          icon: LitecoinIcon,
          price: "3,123.45",
          percentChange: "0.78",
        },
      ],
    }
  );

  useEffect(() => {
    axios
      .get(
        "https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=1DAY&limit=1",
        {
          headers: {
            "X-CoinAPI-Key": process.env.COINAPIKEY,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        dispatch({ type: "updateValues", price: res.data[0].price_close });
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
