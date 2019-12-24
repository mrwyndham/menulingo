import React from "react";
import PropTypes from "prop-types";
import MapCard from "./MapCard";

const LocationCard = props => {
  const componentStyle = {
    backgroundColor: "#ffffff",
    padding: "10vh 2vh 0 2vh",
    fontSize: "3vh",
    fontWeight: "800",
    color: "#000000",
    title: {
      paddingBottom: "3.5vh",
      fontSize: "3.5vh"
    },
    address: {
      padding: "0 6vh"
    }
  };
  const { title, address } = props.data;
  return (
    <div style={componentStyle}>
      <h1 style={componentStyle.title}>{title}</h1>
      <div style={componentStyle.address}>
        <div>{address}</div>
      </div>
      <MapCard />
    </div>
  );
};

LocationCard.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  })
};

export default LocationCard;
