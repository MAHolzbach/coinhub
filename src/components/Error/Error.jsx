import React from "react";

import "./error.scss";

const Error = ({ loadDummyData }) => {
  return (
    <div className="error">
      <p className="error__text">
        You've hit some kind of error. Most likely the daily API limit of 100
        calls has been reached! Hit the button below to load some dummy data.
      </p>
      <button className="error__button" onClick={loadDummyData}>
        Load Dummy Data
      </button>
    </div>
  );
};

export default Error;
