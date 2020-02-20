import React from "react";
import Button from "./Button";
import { connect } from "react-redux";

const ItemInformation = ({ menu: { menu, language }, history }) => {
  const getCatagoryIndex = (translatedMenus, reduxLang) => {
    const URL = `${decodeURI(window.location.href)}`.split("/");
    const cleanURL = URL.filter(e => e !== "");
    const language = cleanURL[2];
    const catagory = cleanURL[cleanURL.length - 2];
    const item = cleanURL.pop() || cleanURL.pop(); // handle potential trailing slash
    const urltoObjectLocation = {};
    for (const lIndex in translatedMenus) {
      const languageName = translatedMenus[lIndex].language.toLowerCase();
      if (languageName === reduxLang) {
        urltoObjectLocation["l"] = lIndex;
      } else if (languageName === language) {
        if (!urltoObjectLocation["l"]) {
          urltoObjectLocation["l"] = lIndex;
        }
      }
      for (const cIndex in translatedMenus[lIndex].catagory) {
        const catagoryName = translatedMenus[lIndex].catagory[
          cIndex
        ].name.toLowerCase();
        if (catagoryName === catagory) {
          urltoObjectLocation["c"] = cIndex;
        }
        for (const iIndex in translatedMenus[lIndex].catagory[cIndex].items) {
          const itemName = translatedMenus[lIndex].catagory[cIndex].items[
            iIndex
          ].name.toLowerCase();
          if (itemName === item) {
            urltoObjectLocation["i"] = iIndex;
          }
        }
      }
    }
    return urltoObjectLocation;
  };

  const index = getCatagoryIndex(menu.data.translatedMenus, language);
  const translatedItem =
    menu.data.translatedMenus[index.l].catagory[index.c].items[index.i];

  const componentStyle = {
    height: "76.75vh",
    width: "auto",
    padding: "11vh 2vh 0 2vh",
    backgroundColor: "#fff",
    ImageWrap: {
      height: "35vh",
      width: "100%",
      margin: "0 0 2vh 0",
      position: "relative",
      borderRadius: "10px",
      Image: {
        position: "absolute",
        backgroundColor: "#000",
        borderRadius: "10px",
        width: "100%",
        height: "100%",
        zIndex: "1",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${translatedItem.pic})`
      }
    },
    Description: {
      height: "22.5vh",
      backgroundColor: "#d1d1d1",
      borderRadius: "10px",
      width: "auto",
      margin: "0 0 2vh 0",
      padding: "3vh",
      color: "#222",
      Title: {
        fontSize: "2.5vh",
        textAlign: "left",
        fontWeight: "800",
        margin: "0 0 1vh 0"
      },
      Body: {
        fontSize: "2vh",
        textAlign: "left",
        margin: "0"
      }
    }
  };

  const handleBack = () => {
    history.push(
      `/${
        menu.data.translatedMenus[index.l].language
      }/${menu.data.translatedMenus[index.l].catagory[
        index.c
      ].name.toLowerCase()}`
    );
  };

  return (
    <div style={componentStyle}>
      <div style={componentStyle.ImageWrap}>
        <div style={componentStyle.ImageWrap.Image}></div>
      </div>
      <div style={componentStyle.Description}>
        <h1 style={componentStyle.Description.Title}>{translatedItem.name}</h1>
        <p style={componentStyle.Description.Body}>
          {translatedItem.description}
        </p>
      </div>
      <Button onBack={handleBack} />
    </div>
  );
};

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(mapStateToProps)(ItemInformation);
