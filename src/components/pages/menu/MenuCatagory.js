import React from "react";

const MenuCatagory = ({ description, name, image }) => {
  const componentStyle = {
    backgroundColor: "#ffffff",
    minHeight: "23.5vh",
    marginBottom: "2vh",
    position: "relative",
    borderRadius: "10px",
    Image: {
      backgroundImage: `url(${image})`,
      backgroundPosition: "25% 70%",
      backgroundSize: "auto 120vh, cover",
      filter: "brightness(40%)",
      position: "absolute",
      backgroundColor: "#000",
      width: "100%",
      height: "100%",
      zIndex: 1,
      borderRadius: "10px"
    },
    Text: {
      padding: "2vh 3vh",
      position: "absolute",
      zIndex: 5,
      top: "0px",
      left: "0px",
      right: "0px",
      bottom: "0px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    Name: {
      fontWeight: 500,
      color: "#fff",
      fontSize: "5vh",
      textTransform: "capitalize",
      marginBottom: "1vh"
    },
    Description: {
      color: " #fff",
      fontSize: "2.5vh",
      textTransform: "capitalize",
      fontWeight: 300
    }
  };
  return (
    <div style={componentStyle}>
      <div style={componentStyle.Image}></div>
      <div style={componentStyle.Text}>
        <div style={componentStyle.Name}>{name}</div>
        <div style={componentStyle.Description}>{description}</div>
      </div>
    </div>
  );
};

export default MenuCatagory;
