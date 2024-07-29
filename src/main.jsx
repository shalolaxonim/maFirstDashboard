import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LayoutMine from "./components/layout/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutMine>
        <App />
      </LayoutMine>
    </BrowserRouter>
  </React.StrictMode>
);
