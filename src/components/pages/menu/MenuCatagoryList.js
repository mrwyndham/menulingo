import React from "react";
import { Link } from "react-router-dom";
import MenuCatagory from "./MenuCatagory";

const MenuCatagoryList = props => {
  const { items, order, catagory, currency, style } = props
  // const items = props.items;
  // const order = props.order;
  // const catagory = props.name;
  // const currency = props.currency;
  return (
    <div>
      <Link
        to={{
          pathname: `/catagory/${catagory}`,
          data: items,
          order: order,
          catagory: catagory,
          currency: currency,
          style: style.MenuCatagory
        }}
      >
        <MenuCatagory
          image={items.pic}
          name={catagory}
          description={items.description}
          style={style.MenuCatagory}
        />
      </Link>
    </div>
  );
};

export default MenuCatagoryList;
