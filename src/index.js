import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import "./assets/styles/global.scss";
import DataProvider from './redux/store';
ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById("app"));
