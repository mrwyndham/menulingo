import React from "react";
import "./MenuItem.scss";

const MenuItem = props => {
  const handleItemClick = e => {
    props.onSelectItem(props.id);
  };
  const { name, price, pic } = props.item;
  let { description } = props.item;
  const { symbol, code } = props.currency;
  const descriptionLength = 25;

  if (description.length > descriptionLength) {
    description = `${description.slice(0, descriptionLength)}...`;
  }

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
