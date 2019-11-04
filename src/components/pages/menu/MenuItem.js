import React, { Component } from 'react';
import './MenuItem.scss';

export class MenuItem extends Component {
  render() {
    return (
      <div className="MenuItem">
        <div className="MenuItem--Pic">
          <img src={this.props.item.pic} alt="" />
        </div>
        <div className="MenuItem--Text">
          <div className="MenuItem--Name">{this.props.item.name}</div>
          <div className="MenuItem--Description">
            {this.props.item.description}
          </div>
        </div>
        <div className="MenuItem--Price">{this.props.item.price}</div>
        <div className="MenuItem--Add">
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    );
  }
}

export default MenuItem;
