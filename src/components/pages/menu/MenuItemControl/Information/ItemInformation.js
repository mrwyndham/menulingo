import React from "react";
import Button from "./components/Button";

const ItemInformation = props => {
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
        backgroundImage: `url(${props.location.order.pic})`
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
  return (
    <div style={componentStyle}>
      <div style={componentStyle.ImageWrap}>
        <div style={componentStyle.ImageWrap.Image}></div>
      </div>
      <div style={componentStyle.Description}>
        <h1 style={componentStyle.Description.Title}>
          {props.location.order.name}
        </h1>
        <p style={componentStyle.Description.Body}>
          {props.location.order.description}
        </p>
        {/* <h1 className="ItemInformation--Name"></h1>
        <h2>
          {props.location.currency.code.symbol}
          {props.location.order.price} {props.location.currency.code}
        </h2>
        <div><p></p></div> */}
      </div>
      <Button />
    </div>
  );
};

export default ItemInformation;
