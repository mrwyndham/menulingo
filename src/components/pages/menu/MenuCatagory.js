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

    let style = {
      contentBackground: {
        backgroundImage: `url(${this.props.catagories.pic})`,
        backgroundPosition: '25% 70%',
        backgroundSize: 'auto 120vh, cover'
      }
    };

    return (
      <div>
        <div className="MenuCatagory" style={style.contentBackground}>
          <div className="MenuCatagory--Text">
            <div className="MenuCatagory--Name">{this.props.name}</div>
            <div className="MenuCatagory--Description">
              {this.props.catagories.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuCatagory;
