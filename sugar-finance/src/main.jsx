import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";
import { WalletProvider } from "./context/WalletContext.jsx";
import "./index.css";

// HashRouter keeps deep links working on static hosts (Cloudflare Pages,
// GitHub Pages) without extra redirect configuration.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ToastProvider>
        <WalletProvider>
          <App />
        </WalletProvider>
      </ToastProvider>
    </HashRouter>
  </React.StrictMode>
);
