import React from "react";
import ReactDom from "react-dom";
import App from "./src/App";

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDom.render(app, document.getElementById("root"));
