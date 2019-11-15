import React from "react";
import "./InformationButton.scss";
import { Link } from "react-router-dom";

const InformationButton = props => {
  const order = props.order;
  const currency = props.currency;
  return (
    <Link
      to={{
        pathname: `/catagory/${props.catagory}/${props.order.id}`,
        order: order,
        currency: currency
      }}
    >
      <div className="InformationButton">
        <span className="InformationButton--Icon">i</span>
      </div>
    </Link>
  );
};

export default InformationButton;
