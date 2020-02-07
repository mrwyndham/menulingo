import React, { useEffect } from "react";
import MenuCatagoryList from "./menu/MenuCatagoryList";
import "./Menu.scss";
import axios from "axios";

const Menu = props => {
  const { catagories, order, currency, style } = props;
  useEffect(() => {
    axios
      .get("http://192.168.0.61:5000/api/v1/menus/5e3c0da1c4174b0a6cd0ef52")
      .then(res => console.log(res.data.data));
  });
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
    <div className="Menu" style={style}>
      {renderCatagories}
    </div>
  );
};

export default Menu;
