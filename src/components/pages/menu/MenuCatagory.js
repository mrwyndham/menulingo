import React from "react";
import "./MenuCatagory.scss";

const MenuCatagory = props => {
  const filter = {
    contentBackground: {
      backgroundImage: `url(${props.image})`,
      backgroundPosition: "25% 70%",
      backgroundSize: "auto 120vh, cover",
      filter: "brightness(40%)"
    }
  };
  return (
    <div className="MenuCatagory">
      <div
        className="MenuCatagory--Image"
        style={filter.contentBackground}
      ></div>
      <div className="MenuCatagory--Text">
        <div
          className="MenuCatagory--Name"
          style={{ color: `${props.style.name.color}` }}
        >
          {props.name}
        </div>
        <div
          className="MenuCatagory--Description"
          style={{ color: `${props.style.name.color}` }}
        >
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default MenuCatagory;
