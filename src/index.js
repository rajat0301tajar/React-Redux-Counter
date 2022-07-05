import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./Counter";
import "./index.css";
import { reducer } from "./reducer";

const store = createStore(reducer);
const App = () => (
  <Provider store={store}>
    <div>
      <Counter />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));
