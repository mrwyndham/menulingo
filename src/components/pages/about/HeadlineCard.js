import React from "react";
import PropTypes from "prop-types";

const HeadlineCard = props => {
  const { data } = props;
  const componentStyle = {
    padding: "2vh 8vh",
    text: {
      textDecoration: "underline",
      color: "#000000",
      fontWeight: "800",
      fontSize: "2.75vh"
    }
  };
  return (
    <div style={componentStyle}>
      <p style={componentStyle.text}>{data}</p>
    </div>
  );
};

HeadlineCard.propTypes = {
  data: PropTypes.string.isRequired
};

export default HeadlineCard;
