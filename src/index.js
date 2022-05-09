import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home/home";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("home"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
if (window.location.pathname !== "/") root.unmount();
reportWebVitals();
