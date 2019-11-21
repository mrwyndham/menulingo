import React, { Component } from "react";
import OrderItem from "./OrderItem";
import "./OrderItemList.scss";
import OrderItemControls from "./OrderItemControls";

export default class OrderItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleSelectItem = id => {
  //   this.state.selectedItem === id
  //     ? this.setState(state => ({ selectedItem: null }))
  //     : this.setState(state => ({ selectedItem: id }));
  // };

  render() {
    const {
      orders,
      currency,
      orderUpdate,
      selectOrderItem,
      selectOrderItemState
    } = this.props;

    const renderOrders = orders.map(order => (
      <div key={order.id} className="OrderItemList--Content">
        <OrderItem
          id={order.id}
          order={order}
          currency={currency}
          selectOrderItem={selectOrderItem}
        />

        {order.id === selectOrderItemState ? (
          <OrderItemControls
            order={order}
            orderUpdate={orderUpdate}
            currency={currency}
          />
        ) : null}
      </div>
    ));
    return <div className="OrderItemList">{renderOrders}</div>;
  }
}
