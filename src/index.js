import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import manageUsers from "./reducers/manageUsers";

// creating store that takes in manageUsers reducer
const store = createStore(manageUsers);

// Adding Provider will grant all components access to store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
