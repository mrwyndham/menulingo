import React, { Component } from 'react';
import MenuItem from './MenuItem';
import './MenuCatagory.scss';

export class MenuCatagory extends Component {
  render() {
    const renderItems = Object.keys(this.props.catagories.items).map(item => (
      <div>
        <MenuItem item={this.props.catagories.items[item]} />
      </div>
    ));

    return (
      <div>
        <div className="MenuCatagory">
          <div className="MenuCatagory--Pic">
            <img src={this.props.catagories.pic} alt="" />
          </div>
          <div className="MenuCatagory--Text">
            <div className="MenuCatagory--Name">{this.props.name}</div>
            <div className="MenuCatagory--Description">
              {this.props.catagories.description}
            </div>
          </div>
        </div>
        {renderItems}
      </div>
    );
  }
}

export default MenuCatagory;
