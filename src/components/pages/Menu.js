import React from "react";
import MenuCatagoryList from "./menu/MenuCatagoryList";
import "./Menu.scss";

const Menu = props => {
  const renderCatagories = Object.keys(props.catagories).map(catagory => (
    <MenuCatagoryList
      key={props.catagories[catagory].id}
      catagories={props.catagories[catagory]}
      name={catagory}
    />
  ));
  return (
    <div
      className="Menu"
      style={{
        backgroundColor: `${props.style.backgroundColor}`
      }}
    >
      {renderCatagories}
    </div>
  );
};

export default Menu;
