import React, { useState, useReducer, useEffect } from "react";
import axios from "axios";

import Header from "../Header/Header";
import Followed from "../Followed/Followed";
import Portfolio from "../Portfolio/Portfolio";
import Recent from "../Recent/Recent";
import Error from "../Error/Error";
import Navbar from "../Navbar/Navbar";

import "./app.scss";

import BitcoinIcon from "../../img/bitcoin-icon.png";
import EthereumIcon from "../../img/ethereum-icon.png";
import LitecoinIcon from "../../img/litecoin-icon.png";
import BitcoinCashIcon from "../../img/bitcoincash-icon.png";
import RippleIcon from "../../img/ripple-icon.png";
import EosIcon from "../../img/eos-icon.png";
import CrossedCircleIcon from "../../img/crossed-circle-icon.png";

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
        percentChange: "-.--",
        quantity: 2.341,
        history: [],
      },
      {
        name: "Ethereum",
        coinId: "ETH",
        assetId: "USD",
        icon: EthereumIcon,
        price: "----.--",
        percentChange: "-.--",
        quantity: 12.33,
        history: [],
      },
      {
        name: "Litecoin",
        coinId: "LTC",
        assetId: "USD",
        icon: LitecoinIcon,
        price: "----.--",
        percentChange: "-.--",
        quantity: 5.331,
        history: [],
      },
      {
        name: "Bitcoin Cash",
        coinId: "BCH",
        assetId: "USD",
        icon: BitcoinCashIcon,
        price: "----.--",
        percentChange: "-.--",
        quantity: 111.33,
        history: [],
      },
      {
        name: "Ripple (XRP)",
        coinId: "XRP",
        assetId: "USD",
        icon: RippleIcon,
        price: "----.--",
        percentChange: "-.--",
        quantity: 0.33,
        history: [],
      },
      {
        name: "EOS",
        coinId: "EOS",
        assetId: "USD",
        icon: EosIcon,
        price: "----.--",
        percentChange: "-.--",
        quantity: 22.13,
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

  const [displayError, setDisplayError] = useState(false);
  const [renderMobileHeader, setRenderMobileHeader] = useState(
    window.innerWidth < 1024
  );

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      setRenderMobileHeader(false);
    } else {
      setRenderMobileHeader(true);
    }
  });

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

  const loadDummyData = () => {
    setDisplayError(false);
    axios.get(process.env.COINSERVICEDUMMYDATAURL).then((res) => {
      res.data.body.map((currency, index) => {
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
    });
  };

  useEffect(() => {
    setDisplayError(false);
    initialState.allowFetches
      ? appState.currenciesFollowed.map((currency, index) => {
          axios
            .post(process.env.COINSERVICEURL, {
              coinId: currency.coinId,
              assetId: currency.assetId,
            })
            .then((res) => {
              const todaysClose = res.data.body[0].price_close;
              const yesterdaysClose = res.data.body[1].price_close;
              const sevenDayHistory = res.data.body;

              setAppState({
                type: "updateValues",
                price: todaysClose,
                percentageChange: calcPriceDifference(
                  todaysClose,
                  yesterdaysClose
                ),
                history: sevenDayHistory,
                index: index,
              });
            })
            .catch((error) => {
              console.log(error);
              setDisplayError(true);
            });
        })
      : loadDummyData();
  }, []);

  return (
    <AppContext.Provider value={appState}>
      <div className="app-wrapper">
        <Navbar>{renderMobileHeader && <Header />}</Navbar>
        <div className="app-content">
          {renderMobileHeader === false && <Header />}
          {displayError && <Error loadDummyData={loadDummyData} />}
          <Followed />
          <div className="app-bottom-row">
            <Portfolio />
            <Recent icon={CrossedCircleIcon} />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
