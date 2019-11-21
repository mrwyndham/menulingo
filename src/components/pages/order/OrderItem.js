import React from "react";
import "./OrderItem.scss";

const OrderItem = props => {
  const handleItemClick = e => {
    props.selectOrderItem(props.id);
  };
  const { name, description, price, pic } = props.order;
  const { symbol, code } = props.currency;
  return (
    <div className="OrderItem" onClick={handleItemClick}>
      <div className="OrderItem--Pic">
        <img src={pic} alt="" />
      </div>
      <div className="OrderItem--Text">
        <div className="OrderItem--Name">{name}</div>
        <div className="OrderItem--Description">{description}</div>
        <div className="OrderItem--Price">
          {symbol} {price} {code}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
