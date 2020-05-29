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
      { name: "Bitcoin", icon: BitcoinIcon },
      { name: "Etherium", icon: EtheriumIcon },
      { name: "Litecoin", icon: LitecoinIcon },
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
