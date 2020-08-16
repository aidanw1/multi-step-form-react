import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StepContext from "./StepContext";

ReactDOM.render(
  <StepContext>
    <App />
  </StepContext>,
  document.getElementById("root")
);
