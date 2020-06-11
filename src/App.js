import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { Provider } from "react-redux";
import myStore from "./store/store";

import "../public/index.css";

const App = () => {
  return (
    <Provider store={myStore}>
      <React.StrictMode>
        <div>
          <Header />
          <Router>
            <Catalog path="/" />
            <Cart path="/cart" />
          </Router>
        </div>
      </React.StrictMode>
    </Provider>
  );
};

export default App;

render(<App />, document.getElementById("root"));
