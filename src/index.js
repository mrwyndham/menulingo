import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import App from "./App";
const store = createStore({});

render(<App store={store} />, document.getElementById("root"));
