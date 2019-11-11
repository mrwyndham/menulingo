import React, { Component } from 'react';
import OrderItem from './MenuItemOrder';
import './MenuItem.scss';

export class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOrderItem: false
    };
  }
  handleClick = () => {
    this.setState(state => ({
      displayOrderItem: !state.displayOrderItem
    }));
  };
  render() {
    return (
      <div className="MenuItem" onClick={this.handleClick}>
        <div className="MenuItem--Pic">
          <img src={this.props.item.pic} alt="" />
        </div>
        <div className="MenuItem--Text">
          <div className="MenuItem--Name">{this.props.item.name}</div>
          <div className="MenuItem--Description">
            {this.props.item.description}
          </div>
          <div className="MenuItem--Price">{this.props.item.price} USD</div>
        </div>
        <div>{this.state.displayOrderItem ? <OrderItem /> : false}</div>
      </div>
    );
  }
}

export default MenuItem;
