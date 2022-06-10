import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LikeContextProvider } from "./store/like-context";
import { BrowserRouter } from "react-router-dom";
import { QueryContextProvider } from "./store/query-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LikeContextProvider>
      <QueryContextProvider>
        <App />
      </QueryContextProvider>
    </LikeContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
