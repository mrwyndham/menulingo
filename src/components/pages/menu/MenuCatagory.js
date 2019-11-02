import React, { Component } from 'react';
import MenuItem from './MenuItem';
import './MenuCatagory.scss';

export class MenuCatagory extends Component {
  render() {
    const renderItems = Object.keys(this.props.items).map(item => (
      <div>
        <MenuItem item={this.props.items[item]} name={item} />
      </div>
    ));

    return (
      <div>
        <div className="MenuCatagory">
          <div className="MenuCatagory--Name">{this.props.name}</div>
        </div>
        {renderItems}
      </div>
    );
  }
}

export default MenuCatagory;
