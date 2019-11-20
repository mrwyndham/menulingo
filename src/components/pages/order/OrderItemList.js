import React, { Component } from "react";
import OrderItem from "./OrderItem";
import "./OrderItemList.scss";
import OrderItemControls from "./OrderItemControls";

export default class OrderItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    };
  }

  handleSelectItem = id => {
    this.setState(() => ({
      selectedItem: id
    }));
  };

  render() {
    const { orders, currency, orderUpdate } = this.props;
    const renderOrders = orders.map(order => (
      <div className="OrderItemList--Content">
        <OrderItem
          key={order.id}
          id={order.id}
          order={order}
          currency={currency}
          onSelectItem={this.handleSelectItem}
        />
        {order.id === this.state.selectedItem ? (
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
