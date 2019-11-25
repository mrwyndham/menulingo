import React, { Component } from "react";
import "./RateSlider.scss";

export class RateSlider extends Component {
  state = {
    rating: 3
  };
  handleStarSelect = e => {
    this.props.handleRate({
      rating: e.currentTarget.id,
      catagory: this.props.catagory
    });
    this.setState({ rating: e.currentTarget.id });
  };
  render() {
    const { rating } = this.state;
    const data = [];
    for (let i = 1; i <= 5; i++) {
      data.push(
        <div
          key={i}
          style={i <= rating ? { fill: "#ff493c" } : { fill: "#555555" }}
          id={i}
          onClick={this.handleStarSelect}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      );
    }
    return <div className="RateSlider">{data}</div>;
  }
}

export default RateSlider;
