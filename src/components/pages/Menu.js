import React, { Component } from 'react';
import MenuCatagory from './menu/MenuCatagory';
import './Menu.scss';

const catagories = {
  burgers: {
    name: 'burgers',
    description: 'All 100% Beef, All Angus',
    pic:
      'https://images.unsplash.com/photo-1570250386140-243b6c5c719d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ',
    items: {
      hamburger: {
        name: 'Hamburger',
        price: '15.00',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1558980664-1db506751c6c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      },
      cheeseburger: {
        name: 'Cheeseburger',
        price: '18.00',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      }
    }
  },
  drinks: {
    name: 'drinks',
    description: 'Get Hydrated!?',
    pic:
      'https://images.unsplash.com/photo-1572625560245-6283a1867c18?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ',
    items: {
      pinocolada: {
        name: 'Pino Colada',
        price: '12.00',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      },
      mojito: {
        name: 'Mojito',
        price: '5.00',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      }
    }
  },
  sides: {
    name: 'sides',
    description: 'A timeless assortment',
    pic:
      'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ',
    items: {
      chips: {
        name: 'Chips',
        price: '10.00',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      },
      cigarettes: {
        name: 'Rothman Reds',
        price: '2.00',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      },
      merakas: {
        name: 'marakas',
        price: '0.50',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      }
    }
  },
  pizza: {
    name: 'pizza',
    items: {
      BBQ: {
        name: 'BBQ',
        price: '0.50',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      }
    },
    description: 'This is a description',
    pic:
      'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
  }
};

export class Menu extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const renderCatagories = Object.keys(catagories).map(catagory => (
      <MenuCatagory catagories={catagories[catagory]} name={catagory} />
    ));
    return <div className="Menu">{renderCatagories}</div>;
  }
}

export default Menu;
