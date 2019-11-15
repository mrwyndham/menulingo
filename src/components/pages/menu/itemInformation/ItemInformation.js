import "./ItemInformation.scss";

import React from "react";

const ItemInformation = props => {
  return (
    <div className="ItemInformation">
      <div>
        <img
          src={props.location.order.pic}
          alt={props.location.order.id}
          srcset=""
        />
      </div>
      <h1>{props.location.order.name}</h1>
      <h2>{props.location.order.price}</h2>
      <div>{props.location.order.description}</div>
    </div>
  );
};

export default ItemInformation;
