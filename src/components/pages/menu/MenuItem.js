import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./MenuItem.scss";

const MenuItem = ({
  item: { name, price, pic, description },
  currency: { symbol, code },
  catagory
}) => {
  const descriptionLength = 25;
  if (description.length > descriptionLength) {
    description = `${description.slice(0, descriptionLength)}...`;
  }

  const language = (() => {
    const parts = `${window.location.href}`.split("/");
    const end = parts.slice(parts.length - 3);
    return end[0];
  })();

  return (
    <Fragment>
      <Link
        to={{
          pathname: `/${language}/${catagory.toLowerCase()}/${name.toLowerCase()}/`
        }}
      >
        <div className="MenuItem">
          <div className="MenuItem--Pic">
            <img src={pic} alt="" />
          </div>
          <div className="MenuItem--Text">
            <div className="MenuItem--Name">{name}</div>
            <div className="MenuItem--Description">{description}</div>
            <div className="MenuItem--Price">
              {symbol}
              {price} {code}
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default MenuItem;
