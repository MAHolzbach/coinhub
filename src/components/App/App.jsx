import React, { useState } from "react";
import Header from "../Header/Header";
import Followed from "../Followed/Followed";
import "./app.scss";
import BitcoinIcon from "../../img/bitcoin-icon.png";
import EtheriumIcon from "../../img/etherium-icon.png";
import LitecoinIcon from "../../img/litecoin-icon.png";

export const AppContext = React.createContext(null);

const App = () => {
  const [appState, setAppState] = useState({
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
    ],
  });

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
