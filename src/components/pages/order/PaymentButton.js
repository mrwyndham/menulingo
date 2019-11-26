import React, { Component } from "react";
import "./PaymentButton.scss";

export class PaymentButton extends Component {
  render() {
    return (
      <div className="PaymentButton">
        <button className="Button--Primary">Pay Now</button>
      </div>
    );
  }
}

export default PaymentButton;
