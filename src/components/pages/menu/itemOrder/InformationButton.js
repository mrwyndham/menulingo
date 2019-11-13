import React from "react";
import "./InformationButton.scss";
import { Link } from "react-router-dom";

const InformationButton = () => {
  return (
    <div className="InformationButton">
      <Link
        to={{
          pathname: `/catagory/item/item`,
          data: "hello"
        }}
      >
        <span className="InformationButton--Icon">i</span>
      </Link>
    </div>
  );
};

export default InformationButton;
