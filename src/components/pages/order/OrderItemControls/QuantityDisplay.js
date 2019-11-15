import React from 'react';
import './QuantityDisplay.scss';

const QuantityDisplay = props => {
  return <div className="QuantityDisplay">{props.amount}</div>;
};

export default QuantityDisplay;
