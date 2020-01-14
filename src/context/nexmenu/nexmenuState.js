import React, { useReducer } from "react";
import axios from "axios";
import NexmenuContext from "./nexmenuContext";
import NexmenuReducer from "./nexmenuReducer";
import { ADD_ITEMS, ADD_ORDERS, REMOVE_ITEMS, REMOVE_ORDERS } from "../types";
import githubContext from "./nexmenuContext";

const NexmenuState = props => {
  const initialState = {
    orders: [],
    selectedOrderID: null
  };

  const [state, dispatch] = useReducer(NexmenuReducer, initialState);

  return (
    <githubContext.Provider
      value={{ orders: state.orders, selectedOrderID: state.selectedOrderID }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default NexmenuState;
