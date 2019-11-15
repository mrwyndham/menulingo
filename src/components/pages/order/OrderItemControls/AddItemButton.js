import React from "react";
import "./AddItemButton.scss";

const AddItemButton = props => {
  return (
    <button className="MenuItemOrder--Button" onClick={props.order}>
      Remove Item
    </button>
  );
};

export default AddItemButton;
