import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './MenuCatagoryCard';

export class MenuCatagory extends Component {
  render() {
    const items = this.props.catagories;
    return (
      <div>
        <Link
          to={{
            pathname: '/menu',
            data: items
          }}
        >
          <Card
            image={items.pic}
            name={this.props.name}
            description={this.props.catagories.description}
          />
        </Link>
      </div>
    );
  }
}

export default MenuCatagory;
