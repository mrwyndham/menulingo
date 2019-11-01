import React, { Component } from 'react';

const catagories = {
  burgers: {
    hamburger: 'Hamburger',
    cheeseburger: 'Cheese Burger'
  }
};

export class Menu extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <div>{catagories.burgers.hamburger}</div>;
  }
}

export default Menu;
