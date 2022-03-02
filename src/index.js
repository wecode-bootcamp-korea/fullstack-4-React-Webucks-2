import React from "react";
import ReactDOM from "react-dom";
import "./styles/reset.scss";
import "./styles/commons.scss";
import Router from "./Router";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
