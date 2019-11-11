import React from 'react';
import './MenuItemOrder.scss';
import Information from './itemOrder/InformationButton';

const MenuItemOrder = props => {
  return (
    <div className="MenuItemOrder" onClick={props.onSelectItem}>
      <Information />
      <button className="MenuItemOrder--Button">Add Item to Order</button>
    </div>
  );
};

export default MenuItemOrder;
