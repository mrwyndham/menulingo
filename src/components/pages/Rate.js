import React, { Component } from "react";
import RatingSlider from "./rate/RateSlider";
import "./Rate.scss";

export default class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      ratingCatagory: []
    };
  }

  handleRate = (e, { rating, maxRating, catagory }) => {
    const rateState = { ...this.state };
    rateState.ratingCatagory.push({ rating, maxRating, catagory });
    alert(rateState.ratingCatagory[0].catagory);
    this.setState();
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    alert("A name was submitted: " + this.state.value);
    alert("Rating: " + this.state.ratingCatagory.rating);
    e.preventDefault();
  };

  render() {
    const myRatings = ["Food", "Location", "Service", "Drinks"];
    const renderRatings = myRatings.map(rating => (
      <div>
        <label htmlFor="">{rating}</label>
        <RatingSlider handleRate={this.handleRate} catagory={rating} />
      </div>
    ));
    return (
      <form onSubmit={this.handleSubmit} class="Rate">
        {renderRatings}

        <div>
          <label htmlFor="">Comment</label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
