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
  handleRate = rateEvent => {
    let dup = { ...this.state };
    const duplicateEventIndex = dup.ratingCatagory.findIndex(
      x => x.catagory === rateEvent.catagory
    );

    duplicateEventIndex !== -1
      ? (dup = dup.ratingCatagory.splice(duplicateEventIndex, 1, rateEvent))
      : (dup = dup.ratingCatagory.push(rateEvent));
    this.setState({ dup });
    console.log(this.state.ratingCatagory);
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    alert("The form was submitted");
    e.preventDefault();
  };

  render() {
    const myRatings = ["Food", "Location", "Service", "Drinks"];
    const renderRatings = myRatings.map((rating, index) => (
      <Fragment key={index}>
        <div htmlFor="" className="Rate--Labels">
          {rating}
        </div>
        <RatingSlider handleRate={this.handleRate} catagory={rating} />
      </Fragment>
    ));
    return (
      <form onSubmit={this.handleSubmit} className="Rate">
        <div className="Rate--Sliders">{renderRatings}</div>

        <div className="Rate--Comments">
          <div className="Rate--Labels" htmlFor="">
            Comment
          </div>
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
