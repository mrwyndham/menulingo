import React, { useState } from "react";
import MenuItem from "./MenuItem";
import MenuCatagory from "./MenuCatagory";
import Order from "./MenuItemControls";
import "./MenuItemList.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const MenuItemList = ({ menu: { language, menu } }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const fromHex = h => {
    let s = "";
    for (let i = 0; i < h.length; i += 2) {
      s += String.fromCharCode(parseInt(h.substr(i, 2), 16));
    }
    return decodeURIComponent(escape(s));
  };
  //Handle page refresh by getting lang from uri
  const handleTranslate = lang => {
    if (lang === "default") {
      const parts = `${window.location.href}`.split("/");
      const end = parts.slice(parts.length - 3);
      lang = `${end[0]}`;
    }
    for (const index in menu.data.translatedMenus) {
      if (lang === menu.data.translatedMenus[index].language) {
        return menu.data.translatedMenus[index];
      }
    }
  };

  const handle = (menu, catagory) => {
    for (const index in menu.catagory) {
      if (menu.catagory[index].name.toLowerCase() === catagory) {
        return menu.catagory[index];
      }
    }
  };

  const handleLastSegment = () => {
    const parts = `${window.location.href}`.split("/");
    const filteredParts = parts.filter(e => e !== "");
    let lastSegment = filteredParts.pop() || filteredParts.pop(); // handle potential trailing slash
    if (language !== "en") {
      lastSegment = fromHex(lastSegment);
    }
    return lastSegment;
  };

  const handleSelectItem = id => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  };

  const renderItems = handle(
    handleTranslate(language),
    handleLastSegment()
  ).items.map(item => (
    <div key={item.id} className="MenuItemList--Content">
      <MenuItem
        id={item.id}
        item={item}
        currency={menu.data.currency}
        onSelectItem={handleSelectItem}
      />

      {item.id === selectedItem ? <Order id={item.id} item={item} /> : null}
    </div>
  ));
  return (
    <div className="MenuItemList">
      <MenuCatagory
        image={handleTranslate(language).catagory[0].pic}
        name={handleTranslate(language).catagory[0].name}
        description={handleTranslate(language).catagory[0].description}
      />
      {renderItems}
    </div>
  );
};

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(mapStateToProps)(MenuItemList);
