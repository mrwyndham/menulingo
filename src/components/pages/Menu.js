import React from "react";
import MenuCatagoryList from "./menu/MenuCatagoryList";
import "./Menu.scss";

const Menu = props => {
  const { catagories, currency, style } = props;
  const renderCatagories = catagories.map(catagory => (
    <MenuCatagoryList
      key={catagory._id}
      items={catagory.items}
      catagory={catagory.name}
      currency={currency}
      style={style.MenuCatagoryList}
    />
  ));
  return (
    <div className="Menu" style={style}>
      {renderCatagories}
    </div>
  );
};

export default Menu;
