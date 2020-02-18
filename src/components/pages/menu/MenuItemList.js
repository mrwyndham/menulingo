import React from "react";
import MenuItem from "./MenuItem";
import MenuCatagory from "./MenuCatagory";
import "./MenuItemList.scss";
import { connect } from "react-redux";

const MenuItemList = ({ menu: { language, menu } }) => {
  //Handle page refresh by getting lang from uri
  const handleTranslate = lang => {
    if (lang === "default") {
      const parts = `${window.location.href}`.split("/");
      const end = parts.slice(parts.length - 3);
      lang = `${end[0]}`;
    }
    // setInitialLanguage(lang);
    for (const index in menu.data.translatedMenus) {
      if (lang === menu.data.translatedMenus[index].language) {
        return menu.data.translatedMenus[index];
      }
    }
  };

  const getCatagoryIndex = () => {
    for (const transMenu of menu.data.translatedMenus) {
      for (const index in transMenu.catagory) {
        const cat = transMenu.catagory[index].name.toLowerCase();
        const parts = `${window.location.href}`.split("/");
        const filteredParts = parts.filter(e => e !== "");
        let lastSegment = filteredParts.pop() || filteredParts.pop(); // handle potential trailing slash
        lastSegment = decodeURI(lastSegment);
        if (cat === lastSegment) {
          return index;
        }
      }
    }
  };

  const myIndex = getCatagoryIndex();

  const renderItems = handleTranslate(language).catagory[myIndex].items.map(
    (item, index) => (
      <div key={index} className="MenuItemList--Content">
        <MenuItem id={item.id} item={item} currency={menu.data.currency} />
      </div>
    )
  );
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
