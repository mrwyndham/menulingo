import React from "react";
import "./AddItemButton.scss";

const AddItemButton = props => {
  return (
    <button className="MenuItemOrder--Button" onClick={props.order}>
      Add Item to Order
    </button>
  );
};

export default AddItemButton;
