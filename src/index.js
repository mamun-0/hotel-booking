import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider
    store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}
  >
    <App />
  </Provider>
);
