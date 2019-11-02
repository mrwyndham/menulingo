import React, { Component } from 'react';
import MenuCatagory from './menu/MenuCatagory';
import './Menu.scss';

const catagories = {
  burgers: {
    hamburger: {
      name: 'Hamburger',
      price: '15.00'
    },
    cheeseburger: {
      name: 'Cheeseburger',
      price: '18.00'
    }
  },
  drinks: {
    pinocolada: {
      name: 'Pino Colada',
      price: '12.00'
    },
    mojito: {
      name: 'Mojito',
      price: '5.00'
    }
  },
  sides: {
    chips: {
      name: 'Chips',
      price: '10.00'
    },
    cigarettes: {
      name: 'Rothman Reds',
      price: '2.00'
    },
    merakas: {
      name: 'marakas',
      price: '0.50'
    }
  },
  pizza: {
    BBQ: {
      name: 'BBQ',
      price: '0.50'
    }
  }
};

export class Menu extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const renderCatagories = Object.keys(catagories).map(catagory => (
      <div>
        <MenuCatagory items={catagories[catagory]} name={catagory} />
      </div>
    ));
    return <div className="Menu">{renderCatagories}</div>;
  }
}

export default Menu;
