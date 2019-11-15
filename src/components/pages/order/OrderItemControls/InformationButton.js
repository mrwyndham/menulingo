import React from "react";
import "./InformationButton.scss";
import { Link } from "react-router-dom";

const InformationButton = props => {
  return (
    <Link
      to={{
        pathname: `/catagory/${props.catagory}/${props.order.id}`,
        order: props.order,
        currency: props.currency
      }}
    >
      <div className="InformationButton">
        <span className="InformationButton--Icon">i</span>
      </div>
    </Link>
  );
};

export default InformationButton;
