import React from "react";
import PropTypes from "prop-types";

const GalleryCard = props => {
  const componentStyle = {
    padding: "10vh 0",
    backgroundColor: "#000000",
    color: "#ffffff",
    title: {
      fontSize: "4vh"
    },
    subtitle: {
      paddingBottom: "1vh",
      fontWeight: "400",
      fontSize: "2.5vh"
    },
    imageWrapper: {
      height: "30vh",
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
      <h1 style={componentStyle.title}>Gallery</h1>
      <p style={componentStyle.subtitle}>Swipe for more pictures</p>
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
