import "./ItemInformation.scss";
import React from "react";

const ItemInformation = props => {
  return (
    <div className="ItemInformation">
      <div className="ItemInformation--ImageWrapper">
        <div
          className="ItemInformation--Image"
          style={{ backgroundImage: `url(${props.location.order.pic})` }}
        ></div>
      </div>
      <h1 className="ItemInformation--Name">{props.location.order.name}</h1>
      <h2 className="ItemInformation--Price">
        {props.location.currency.code.symbol}
        {props.location.order.price} {props.location.currency.code}
      </h2>
      <div className="ItemInformation--Description">
        <p>{props.location.order.description}</p>
      </div>
    </div>
  );
};

export default ItemInformation;
