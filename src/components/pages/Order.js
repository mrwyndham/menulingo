import React from "react";
import Orders from "./order/OrderItem";

const Order = props => {
  const renderOrders = Object.keys(props.orders).map(order => (
    <Orders
      key={props.orders[order].id}
      id={props.orders[order].id}
      order={props.orders[order]}
      name={order}
    />
  ));
  return <div>{renderOrders}</div>;
};

export default Order;
