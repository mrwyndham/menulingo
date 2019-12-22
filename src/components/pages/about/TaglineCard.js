import React from "react";
import PropTypes from "prop-types";

const HeadlineCard = props => {
  const { data } = props;
  const componentStyle = {
    padding: "4.3vh 2vh",
    text: {
      color: "#000000",
      fontWeight: "400",
      fontSize: "3.75vh"
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
