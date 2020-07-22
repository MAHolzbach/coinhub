import React from "react";

import "./error.scss";

const Error = () => {
  return (
    <div className="error">
      <p className="error__text">
        You've hit some kind of error. Most likely you've used up the 100
        allowed API calls!
      </p>
    </div>
  );
};

export default Error;
