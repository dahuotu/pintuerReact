import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import { Router } from "react-router-dom";
import { Provider } from "mobx-react";

import routes from "./router";
import utils from "./utils";

ReactDOM.render(
  <Provider>
    <Router history={utils.history}>{routes}</Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
