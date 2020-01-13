import React from "react";
import PropTypes from "prop-types";

const HeadlineCard = props => {
  const { data } = props;
  const componentStyle = {
    padding: "2vh 4vh",
    text: {
      color: "#000000",
      fontWeight: "800",
      fontSize: "3vh"
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
