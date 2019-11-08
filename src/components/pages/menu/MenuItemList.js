import React from 'react';
import MenuItem from './MenuItem';
import Card from './MenuCatagory';
import './MenuItemList.scss';

const MenuItemList = props => {
  const items = props.location.data.items;
  const renderItems = Object.keys(items).map(item => (
    <div>
      <MenuItem item={items[item]} />
    </div>
  ));
  return (
    <div className="MenuItems">
      <Card
        image={props.location.data.pic}
        name={props.location.data.name}
        description={props.location.data.description}
      />
      {renderItems}
    </div>
  );
};

export default MenuItemList;