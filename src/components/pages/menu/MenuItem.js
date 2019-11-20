import React from "react";
import "./MenuItem.scss";

const MenuItem = props => {
  const handleItemClick = e => {
    props.onSelectItem(props.id);
  };
  const { name, description, price, pic } = props.item;
  const { symbol, code } = props.currency;
  return (
    <div className="MenuItem" onClick={handleItemClick}>
      <div className="MenuItem--Pic">
        <img src={pic} alt="" />
      </div>
      <div className="MenuItem--Text">
        <div className="MenuItem--Name">{name}</div>
        <div className="MenuItem--Description">{description}</div>
        <div className="MenuItem--Price">
          {symbol}
          {price} {code}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
