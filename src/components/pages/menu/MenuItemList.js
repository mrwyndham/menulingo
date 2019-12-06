import React, { useState } from "react";
import MenuItem from "./MenuItem";
import MenuCatagory from "./MenuCatagory";
import Order from "./MenuItemControls";
import "./MenuItemList.scss";
import PropTypes from "prop-types";

const MenuItemList = ({
  location: {
    data: { items, pic, name, description },
    order,
    catagory,
    currency,
    style
  }
}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = id => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  };

  const renderItems = items.map(item => (
    <div key={item.id} className="MenuItemList--Content">
      <MenuItem
        id={item.id}
        item={item}
        currency={currency}
        onSelectItem={handleSelectItem}
      />

      {item.id === selectedItem ? (
        <Order
          id={item.id}
          item={item}
          order={order}
          catagory={catagory}
          currency={currency}
        />
      ) : null}
    </div>
  ));
  return (
    <div className="MenuItemList">
      <MenuCatagory image={pic} name={name} description={description} style={style}/>
      {renderItems}
    </div>
  );
};

MenuItemList.propTypes = {
  location: PropTypes.shape({
    data: PropTypes.exact({
      id: PropTypes.number.isRequired,
      items: PropTypes.array,
      pic: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }),
    order: PropTypes.func.isRequired,
    catagory: PropTypes.string.isRequired,
    currency: PropTypes.exact({
      symbol: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired
    })
  })
};

export default MenuItemList;
