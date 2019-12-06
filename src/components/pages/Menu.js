import React from "react";
import MenuCatagoryList from "./menu/MenuCatagoryList";
import "./Menu.scss";

const Menu = props => {
  const { catagories, order, currency, style } = props;
  const renderCatagories = Object.keys(catagories).map(catagory => (
    <MenuCatagoryList
      key={catagories[catagory].id}
      items={catagories[catagory]}
      catagory={catagories[catagory].name}
      order={order}
      currency={currency}
      style={style.MenuCatagoryList}
    />
  ));
  return (
    <div
      className="Menu"
      style={{
        backgroundColor: `${style.backgroundColor}`
      }}
    >
      {renderCatagories}
    </div>
  );
};

export default Menu;
