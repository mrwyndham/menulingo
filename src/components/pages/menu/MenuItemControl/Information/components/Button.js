import React from "react";
import PropTypes from "prop-types";

const Button = ({ style }) => {
  const componentStyle = {
    height: "7.5vh",
    backgroundColor: "#000",
    borderRadius: "10px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    Text: {
      color: "#fff",
      fontSize: "3vh",
      textAlign: "center"
    }
  };
  return (
    <div style={componentStyle}>
      <span style={componentStyle.Text}>Back</span>
    </div>
  );
};

Button.propTypes = {
  style: PropTypes.object.isRequired
};

export default Button;
