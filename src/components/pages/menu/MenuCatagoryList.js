import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuCatagory from './MenuCatagory';

export class MenuCatagoryList extends Component {
  render() {
    const items = this.props.catagories;
    return (
      <div>
        <Link
          to={{
            pathname: `/catagory/${this.props.name}`,
            data: items
          }}
        >
          <MenuCatagory
            image={items.pic}
            name={this.props.name}
            description={this.props.catagories.description}
          />
        </Link>
      </div>
    );
  }
}

export default MenuCatagoryList;
