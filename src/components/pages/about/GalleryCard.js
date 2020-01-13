import React from "react";
import PropTypes from "prop-types";

const GalleryCard = props => {
  const componentStyle = {
    padding: "0",
    backgroundColor: "#000000",
    color: "#ffffff",
    title: {
      fontSize: "5vh",
      padding: "0vh"
    },
    subtitle: {
      padding: "0.5vh 0 2vh 0",
      margin: "0vh",
      fontWeight: "400",
      fontSize: "2.5vh"
    },
    imageWrapper: {
      height: "60vh",
      image: {
        filter: "grayscale(100%)",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }
  };
  return (
    <div style={componentStyle}>
      {/* <h1 style={componentStyle.title}>Gallery</h1>
      <p style={componentStyle.subtitle}>Swipe for more pictures</p> */}
      <div style={componentStyle.imageWrapper}>
        <img
          style={componentStyle.imageWrapper.image}
          src={props.data}
          alt=""
        />
      </div>
    </div>
  );
};

GalleryCard.propTypes = {
  data: PropTypes.string.isRequired
};

export default GalleryCard;
