import React, { Component } from "react";
import "./MenuItemOrder.scss";
import Information from "./itemOrder/InformationButton";
import QuantityControl from "./itemOrder/QuantityControl";
import QuantityDisplay from "./itemOrder/QuantityDisplay";
import Order from "./itemOrder/AddItemButton";

export default class MenuItemOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.item.name,
      price: props.item.price,
      amount: 0,
      description: props.item.description,
      pic: props.item.pic
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
      <div className="MenuItemOrder" onClick={this.props.onSelectItem}>
        <Information order={this.state} catagory={this.props.catagory} />
        <QuantityDisplay amount={this.state.amount} />
        <QuantityControl add={this.handleAdd} subtract={this.handleSubtract} />
        <Order order={this.handleOrder} />
      </div>
    );
  }
}
