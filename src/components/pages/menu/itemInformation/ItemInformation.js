import "./ItemInformation.scss";

import React from "react";

const ItemInformation = props => {
  return (
    <div className="ItemInformation">
      <img src={props.location.order.pic} alt="" srcset="" />
      <h1>{props.location.order.id}</h1>
      <h1>{props.location.order.name}</h1>
      <h1>{props.location.order.price}</h1>
      <h1>{props.location.order.description}</h1>
    </div>
  );
};

export default ItemInformation;
