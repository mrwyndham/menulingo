import React from "react";
import OrderItem from "./OrderItem";
import "./OrderItemList.scss";

const OrderItemList = props => {
  const renderOrders = props.orders.map(order => (
    <OrderItem key={order.id} id={order.id} order={order} />
  ));
  return <React.Fragment>{renderOrders}</React.Fragment>;
};

export default OrderItemList;
