import React, { useState } from "react";
import MenuItem from "./MenuItem";
import MenuCatagory from "./MenuCatagory";
import Order from "./MenuItemControls";
import "./MenuItemList.scss";

const MenuItemList = ({
  location: {
    data: { items, pic, name, description },
    order,
    catagory,
    currency
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
      <MenuCatagory image={pic} name={name} description={description} />
      {renderItems}
    </div>
  );
};

export default MenuItemList;
