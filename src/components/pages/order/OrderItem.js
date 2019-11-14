import React from "react";
import "./OrderItem.scss";

const OrderItem = props => {
  return (
    <div className="OrderItem">
      <div className="OrderItem--Pic">
        <img src={props.order.pic} alt="" />
      </div>
      <div className="OrderItem--Text">
        <div className="OrderItem--Name">{props.order.name}</div>
        <div className="OrderItem--Description">{props.order.description}</div>
        <div className="OrderItem--Price">{props.order.price} USD</div>
      </div>
    </div>
  );
};

export default OrderItem;
