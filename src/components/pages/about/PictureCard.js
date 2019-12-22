import React from "react";
import PropTypes from "prop-types";

const PictureCard = props => {
  const componentStyle = {
    minHeight: "78vh",
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  };
  return (
    <div style={componentStyle}>
      <img style={componentStyle.image} src={props.data} alt="" />
    </div>
  );
};

PictureCard.propTypes = {
  data: PropTypes.string.isRequired
};

export default PictureCard;
