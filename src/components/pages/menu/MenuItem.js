import React from "react";
import "./MenuItem.scss";

const MenuItem = props => {
  const handleItemClick = () => {
    props.onSelectItem(props.id);
  };
  return (
    <div className="MenuItem" onClick={handleItemClick}>
      <div className="MenuItem--Pic">
        <img src={props.item.pic} alt="" />
      </div>
      <div className="MenuItem--Text">
        <div className="MenuItem--Name">{props.item.name}</div>
        <div className="MenuItem--Description">{props.item.description}</div>
        <div className="MenuItem--Price">{props.item.price} USD</div>
      </div>
    </div>
  );
};

export default MenuItem;
