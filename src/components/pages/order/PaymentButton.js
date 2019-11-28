import React from "react";
import "./PaymentButton.scss";

const PaymentButton = props => {
  return (
    <div className="PaymentButton">
      <button className="Button--Primary" onClick={props.handlePay}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentButton;
