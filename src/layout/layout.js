import React, { useEffect, useState } from "react";
import "./layout.css";

/* function getDataApi() {
  try {
    switch (window.location.pathname) {
      case "/":
        return <div id="home" />;
      case "/cursos":
        return <div id="cursos" />;

      default:
        return <div id="error" />;
    }
  } catch (error) {
    console.log(error);
    return null;
  }

  return [
    { id: 1, name: "curso 1", desc: "este es la desc del curso 1" },
    { id: 2, name: "curso 2", desc: "este es la desc del curso 2" },
    { id: 3, name: "curso 3", desc: "este es la desc del curso 3" },
    { id: 4, name: "curso 4", desc: "este es la desc del curso 4" },
  ];
} */

function Layout(props) {
  return <div className="body center">{props.children}</div>;
}

export default Layout;
