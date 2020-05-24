import React, { useState } from "react";
import Header from "../Header/Header";
import Followed from "../Followed/Followed";
import "./app.scss";

export const AppContext = React.createContext(null);

const App = () => {
  const [appState, setAppState] = useState({
    currenciesFollowed: ["Bitcoin", "Etherium", "Litecoin"],
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
