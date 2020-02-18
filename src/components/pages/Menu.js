import React from "react";
import MenuCatagoryList from "./menu/MenuCatagoryList";
import "./Menu.scss";

const Menu = ({ catagories }) => {
  const renderCatagories = catagories.map((catagory, index) => (
    <MenuCatagoryList key={catagory._id} data={catagory} index={index} />
  ));
  return <div className="Menu">{renderCatagories}</div>;
};

export default Menu;
