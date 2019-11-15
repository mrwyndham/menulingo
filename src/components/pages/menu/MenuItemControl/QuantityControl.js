import React from 'react';
import './QuantityControl.scss';

const QuantityControl = props => {
  return (
    <div className="QuantityControl">
      <button
        className="QuantityControl--Button QuantityControl--Button__Subtract"
        onClick={props.subtract}
      >
        -
      </button>
      <button
        className="QuantityControl--Button QuantityControl--Button__Add"
        onClick={props.add}
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;
