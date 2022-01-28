import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "antd/dist/antd.css";
import "@/styles/index.scss";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("app")
);
