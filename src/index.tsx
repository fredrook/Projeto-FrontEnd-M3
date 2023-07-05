import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import GlobalStyle from "./styles/Global Styles/Global Styles";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);