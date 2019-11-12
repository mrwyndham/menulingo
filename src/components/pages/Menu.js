import React from 'react';
import MenuCatagoryList from './menu/MenuCatagoryList';
import './Menu.scss';

const catagories = {
  burgers: {
    id: 1,
    name: 'burgers',
    description: 'All 100% Beef, All Angus',
    pic:
      'https://images.unsplash.com/photo-1570250386140-243b6c5c719d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ',
    items: {
      hamburger: {
        id: 1,
        name: 'Hamburger',
        price: '15.00',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1558980664-1db506751c6c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      },
      cheeseburger: {
        id: 2,
        name: 'Cheeseburger',
        price: '18.00',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      },
      cheeseburger1: {
        id: 3,
        name: 'Cheeseburger',
        price: '18.00',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      },
      cheeseburger2: {
        id: 4,
        name: 'Cheeseburger',
        price: '18.00',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      },
      cheeseburger3: {
        id: 5,
        name: 'Cheeseburger',
        price: '18.00',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      },
      cheeseburger4: {
        id: 6,
        name: 'Cheeseburger',
        price: '18.00',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      }
    }
  },
  drinks: {
    id: 2,
    name: 'drinks',
    description: 'Get Hydrated!?',
    pic:
      'https://images.unsplash.com/photo-1572625560245-6283a1867c18?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ',
    items: {
      pinocolada: {
        id: 7,
        name: 'Pino Colada',
        price: '12.00',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      },
      mojito: {
        id: 8,
        name: 'Mojito',
        price: '5.00',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      }
    }
  },
  sides: {
    id: 3,
    name: 'sides',
    description: 'A timeless assortment',
    pic:
      'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ',
    items: {
      chips: {
        id: 9,
        name: 'Chips',
        price: '10.00',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      },
      cigarettes: {
        id: 10,
        name: 'Rothman Reds',
        price: '2.00',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      },
      merakas: {
        id: 11,
        name: 'marakas',
        price: '0.50',
        description: 'This is a description',
        pic:
          'https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ'
      }
    }
  },
  pizza: {
    id: 4,
    name: 'pizza',
    items: {
      BBQ: {
        id: 12,
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
  },
  pizza1: {
    id: 5,
    name: 'pizza',
    items: {
      BBQ: {
        id: 13,
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

const Menu = props => {
  const renderCatagories = Object.keys(catagories).map(catagory => (
    <MenuCatagoryList
      key={catagories[catagory].id}
      catagories={catagories[catagory]}
      name={catagory}
    />
  ));
  return (
    <div
      className="Menu"
      style={{
        backgroundColor: `${props.location.data}`
      }}
    >
      {renderCatagories}
    </div>
  );
};

export default Menu;
