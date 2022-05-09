import React from "react";
import ReactDOM from "react-dom/client";
import "./home.css";
import "../bootstrap";
import Layout from "../layout/layout";

const home = ReactDOM.createRoot(document.getElementById("home"));
home.render(
  <React.StrictMode>
    <Layout>
      <div>HOME WEB</div>
    </Layout>
  </React.StrictMode>
);
