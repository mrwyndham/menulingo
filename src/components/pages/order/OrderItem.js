import React from "react";
import "./OrderItem.scss";

const OrderItem = props => {
  const handleItemClick = e => {
    props.onSelectItem(props.id);
  };
  return (
    <div className="OrderItem" onClick={handleItemClick}>
      <div className="OrderItem--Pic">
        <img src={props.order.pic} alt="" />
      </div>
      <div className="OrderItem--Text">
        <div className="OrderItem--Name">{props.order.name}</div>
        <div className="OrderItem--Description">{props.order.description}</div>
        <div className="OrderItem--Price">
          {props.currency.symbol}
          {props.order.price} {props.currency.code}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
