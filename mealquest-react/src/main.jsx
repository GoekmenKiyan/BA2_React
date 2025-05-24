import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FavoritesProvider } from "./state/FavoritesContext";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </React.StrictMode>
);