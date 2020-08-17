import React from "react";
import ReactDOM from "react-dom";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
