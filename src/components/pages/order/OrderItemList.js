import React from "react";
import OrderItem from "./OrderItem";
import "./OrderItemList.scss";
import OrderItemControls from "./OrderItemControls";

const OrderItemList = props => {
  const renderOrders = props.orders.map(order => (
    <div className="OrderItemList--Content">
      <OrderItem
        key={order.id}
        id={order.id}
        order={order}
        currency={props.currency}
      />
      <OrderItemControls
        order={order}
        orderUpdate={props.orderUpdate}
        currency={props.currency}
      />
    </div>
  ));
  return <React.Fragment>{renderOrders}</React.Fragment>;
};

export default OrderItemList;
