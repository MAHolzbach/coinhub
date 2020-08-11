import React from "react";

import "./error.scss";

const Error = ({ loadDummyData, errorMsg }) => {
  return (
    <div className="error">
      <p className="error__text">{errorMsg}</p>
      <button className="error__button" onClick={loadDummyData}>
        Load Dummy Data
      </button>
    </div>
  );
};

export default Error;
