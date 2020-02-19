import React from "react";
import MenuItem from "./MenuItem";
import MenuCatagory from "./MenuCatagory";
import "./MenuItemList.scss";
import { connect } from "react-redux";

const MenuItemList = ({ menu: { language, menu } }) => {
  //Handle page refresh by getting lang from uri
  const handleTranslate = (lang, defaultLang, menu) => {
    if (lang === "default") {
      const parts = `${window.location.href}`.split("/");
      const end = parts.slice(parts.length - 3);
      end[0] ? (lang = `${end[0]}`) : (lang = `${defaultLang}`);
    }
    // setInitialLanguage(lang);
    for (const index in menu) {
      if (lang === menu[index].language) {
        return menu[index];
      }
    }
  };

  const getCatagoryIndex = translatedMenus => {
    const URL = `${window.location.href}`.split("/");
    const cleanURL = URL.filter(e => e !== "");
    const lastSegment = cleanURL.pop() || cleanURL.pop(); // handle potential trailing slash
    for (const translatedMenu of translatedMenus) {
      for (const index in translatedMenu.catagory) {
        const catagoryName = translatedMenu.catagory[index].name.toLowerCase();
        if (catagoryName === decodeURI(lastSegment)) {
          return index;
        }
      }
    }
  };

  const translatedMenu = handleTranslate(
    language,
    "en",
    menu.data.translatedMenus
  ).catagory[getCatagoryIndex(menu.data.translatedMenus)];

  const renderItems = translatedMenu.items.map((item, index) => (
    <div key={index} className="MenuItemList--Content">
      <MenuItem
        id={item.id}
        item={item}
        currency={menu.data.currency}
        catagory={translatedMenu.name}
      />
    </div>
  ));
  return (
    <div className="MenuItemList">
      <MenuCatagory
        image={translatedMenu.pic}
        name={translatedMenu.name}
        description={translatedMenu.description}
      />
      {renderItems}
    </div>
  );
};

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(mapStateToProps)(MenuItemList);
