import React from "react";
import PropTypes from "prop-types";

const InfoCard = props => {
  const componentStyle = {
    backgroundColor: "#000000",
    padding: "10vh 4vh 12vh 4vh",
    header: {
      margin: "0",
      paddingBottom: "1vh",
      color: "#ffffff",
      fontSize: "5vh"
    },
    body: {
      fontWeight: "400",
      color: "#ffffff",
      fontSize: "2.5vh",
      margin: "0"
    }
  };
  const { data } = props;
  return (
    <div style={componentStyle}>
      <h2 style={componentStyle.header}>{data.tagline}</h2>
      <p style={componentStyle.body}>{data.description}</p>
    </div>
  );
};

InfoCard.propTypes = {
  data: PropTypes.exact({
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default InfoCard;
