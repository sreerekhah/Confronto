import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import {store} from "./redux/store"
import { server } from "./server";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { catalogApi } from "./redux/apiSlice";



if (process.env.NODE_ENV === "development") {
  server();
}
ReactDOM.render(
  <ApiProvider api={catalogApi}>
  <Provider store={store}>
      <App />
  </Provider> 
  </ApiProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
