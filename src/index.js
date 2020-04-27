import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import App from "./components/App/App";

const title = "CoinBase";

ReactDOM.render(<App title={title} />, document.getElementById("app"));

module.hot.accept();
