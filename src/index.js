import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import "normalize.css";
import "@/assets/css/index.less";
import store from "./store";

// @ => src 在webpack中进行配置

// 但是react脚手架隐藏了webpack配置
// 解决一: npm run eject
// 解决二: craco(create-reacr-app config)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Suspense fallback="loading...">
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </Suspense>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
