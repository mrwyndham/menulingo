import React from "react";
import { Link } from "react-router-dom";
import MenuCatagory from "./MenuCatagory";

const MenuCatagoryList = props => {
  const items = props.items;
  const order = props.order;
  const catagory = props.name;
  const currency = props.currency;
  return (
    <div>
      <Link
        to={{
          pathname: `/catagory/${props.name}`,
          data: items,
          order: order,
          catagory: catagory,
          currency: currency
        }}
      >
        <MenuCatagory
          image={items.pic}
          name={catagory}
          description={items.description}
        />
      </Link>
    </div>
  );
};

export default MenuCatagoryList;
