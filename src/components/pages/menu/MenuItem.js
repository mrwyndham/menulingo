import React, { Component } from 'react';
import './MenuItem.scss';

export class MenuItem extends Component {
  render() {
    return (
      <div className="MenuItem">
        <div className="MenuItem--Name">{this.props.name}</div>
      </div>
    );
  }
}

export default MenuItem;
