import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./store";
import Home from "./components/Main";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Home />
    </Router>
  </Provider>,
  document.getElementById("app") // make sure this is the same as the id of the div in your index.html
);
