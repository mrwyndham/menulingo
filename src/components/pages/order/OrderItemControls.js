import React, { Component } from "react";
import "./OrderItemControls.scss";
import Information from "./OrderItemControls/InformationButton";
import QuantityControl from "./OrderItemControls/QuantityControl";
import QuantityDisplay from "./OrderItemControls/QuantityDisplay";
import Order from "./OrderItemControls/AddItemButton";

export default class OrderItemControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.order.id,
      name: props.order.name,
      price: props.order.price,
      amount: props.order.amount,
      description: props.order.description,
      pic: props.order.pic
    };
  }

  handleOrderRemove = () => {
    this.props.orderUpdate[1](this.state);
  };
  handleAdd = e => {
    this.setState(
      () => ({
        amount: this.state.amount + 1
      }),
      () => {
        this.props.orderUpdate[0](this.state);
      }
    );
  };
  handleSubtract = e => {
    this.setState(
      state => ({
        amount:
          state.amount > 0 ? (state.amount = state.amount - 1) : state.amount
      }),
      () => {
        this.props.orderUpdate[0](this.state);
      }
    );
  };
  render() {
    const { amount } = this.state;
    const { catagory, currency, onSelectItem } = this.props;
    return (
      <div className="OrderItemControls" onClick={onSelectItem}>
        <Information
          order={this.state}
          catagory={catagory}
          currency={currency}
        />
        <QuantityDisplay amount={amount} />
        <QuantityControl add={this.handleAdd} subtract={this.handleSubtract} />
        <Order order={this.handleOrderRemove} />
      </div>
    );
  }
}
