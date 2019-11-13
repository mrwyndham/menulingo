import React from "react";

const OrderItem = props => {
  return (
    <div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>{props.id}</div>
      <div>{props.order.description}</div>
      <div>{props.order.price}</div>
      <div>{props.order.name}</div>
    </div>
  );
};

export default OrderItem;
