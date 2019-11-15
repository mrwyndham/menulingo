import React from "react";
import { Link } from "react-router-dom";
import MenuCatagory from "./MenuCatagory";

const MenuCatagoryList = props => {
  const items = props.catagories;
  const order = props.order;
  const catagory = props.name;
  return (
    <div>
      <Link
        to={{
          pathname: `/catagory/${props.name}`,
          data: items,
          order: order,
          catagory: catagory
        }}
      >
        <MenuCatagory
          image={items.pic}
          name={props.name}
          description={items.description}
        />
      </Link>
    </div>
  );
};

export default MenuCatagoryList;
