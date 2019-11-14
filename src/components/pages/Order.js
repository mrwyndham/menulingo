import React from "react";
import OrderItemList from "./order/OrderItemList";
import "./Order.scss";

const Order = props => {
  return (
    <div className="Order">
      <OrderItemList orders={props.orders} />
    </div>
  );
};

export default Order;
