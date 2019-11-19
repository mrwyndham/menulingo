import React, { Component, Fragment } from "react";
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
    const renderRatings = myRatings.map((rating, index) => (
      <Fragment key={index}>
        <label htmlFor="" className="Rate--Labels">
          {rating}
        </label>
        <RatingSlider handleRate={this.handleRate} catagory={rating} />
      </Fragment>
    ));
    return (
      <form onSubmit={this.handleSubmit} className="Rate">
        {renderRatings}

        <div className="Rate--Comments">
          <label className="Rate--Labels" htmlFor="">
            Comment
          </label>
          <input
            className="Rate--Textbox"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>

        <input
          className="Button--Primary__Sm__Red"
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}
