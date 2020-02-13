import React from "react";
import MenuCatagoryList from "./menu/MenuCatagoryList";
import "./Menu.scss";

const Menu = ({ catagories }) => {
  const renderCatagories = catagories.map(catagory => (
    <MenuCatagoryList key={catagory._id} data={catagory} />
  ));
  return <div className="Menu">{renderCatagories}</div>;
};

export default Menu;
