import React, { useState } from "react";
import Header from "../Header/Header";
import "./app.scss";

export const AppContext = React.createContext(null);

const App = () => {
  const [appState, setAppState] = useState({ currency: "Bitcoin" });

  return (
    <AppContext.Provider value={appState}>
      <div>
        <Header />
      </div>
    </AppContext.Provider>
  );
};

export default App;
