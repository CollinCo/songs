import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // handles store
import { createStore } from "redux"; // store contains reducer methods and contains all state data

import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  // store is created from createStore method above
  // and passed in our reducer object containing reducer functions
  // provider handles store
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
