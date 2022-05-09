import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home/home";

const root = ReactDOM.createRoot(document.getElementById("home"));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
if (window.location.pathname !== "/") root.unmount();
reportWebVitals();
