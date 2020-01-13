import React from "react";
import PropTypes from "prop-types";

const PictureCard = ({ data }) => {
  const componentStyle = {
    minHeight: "78vh",
    position: "relative",
    width: "100%",
    image: {
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: "1",
      left: "0",
      filter: "grayscale(100%) brightness(50%)"
    },
    text: {
      color: "#ffffff",
      position: "absolute",
      fontSize: "8vh",
      zIndex: "5",
      letterSpacing: "-0.25vh",
      width: "100%",
      top: "25vh",
      fontWeight: "800",
      whiteSpace: "pre-wrap",
      lineHeight: "5.5vh"
    }
  };
  return (
    <div style={componentStyle}>
      <p style={componentStyle.text}>{data.text}</p>
      <img style={componentStyle.image} src={data.image} alt="" />
    </div>
  );
};

PictureCard.propTypes = {
  data: PropTypes.exact({
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default PictureCard;
