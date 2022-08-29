import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
