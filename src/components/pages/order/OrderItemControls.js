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
  handleOrder = () => {
    this.props.order(this.state);
  };
  handleAdd = () => {
    this.setState(() => ({
      amount: this.state.amount + 1
    }));
  };
  handleSubtract = () => {
    this.setState(state => ({
      amount:
        state.amount > 0 ? (state.amount = state.amount - 1) : state.amount
    }));
  };
  render() {
    return (
      <div className="OrderItemControls" onClick={this.props.onSelectItem}>
        <Information
          order={this.state}
          catagory={this.props.catagory}
          currency={this.props.currency}
        />
        <QuantityDisplay amount={this.state.amount} />
        <QuantityControl add={this.handleAdd} subtract={this.handleSubtract} />
        <Order order={this.handleOrder} />
      </div>
    );
  }
}
