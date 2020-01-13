import React, { Fragment, useState } from "react";
import RatingSlider from "./rate/RateSlider";
import "./Rate.scss";
import PropTypes from "prop-types";

const Rate = props => {
  const { style, data } = props;
  const [ratings, setRatings] = useState([]);
  const [comment, setComment] = useState("");
  const handleRate = rateEvent => {
    let buildArray = ratings;
    let index = buildArray.findIndex(x => x.catagory === rateEvent.catagory);
    index === -1
      ? buildArray.push(rateEvent)
      : buildArray.splice(index, 1, rateEvent);
    setRatings(buildArray);
    console.log(ratings);
  };

  const handleChange = e => {
    setComment(e.target.value);
  };

  const handleSubmit = e => {
    alert("The form was submitted");
    e.preventDefault();
  };
  const renderRatings = data.ratings.map((rating, index) => (
    <Fragment key={index}>
      <div htmlFor="" className="Rate--Labels" style={style.slider.label}>
        {rating}
      </div>
      <RatingSlider handleRate={handleRate} catagory={rating} />
    </Fragment>
  ));
  return (
    <form onSubmit={handleSubmit} className="Rate" style={style}>
      <div className="Rate--Sliders">{renderRatings}</div>
      <div className="Rate--Comments">
        <div className="Rate--Labels" style={style.comment.label} htmlFor="">
          {data.comment}
        </div>
        <input
          className="Rate--Textbox"
          type="text"
          value={comment}
          onChange={handleChange}
        />
      </div>
      <input
        className="Button--Primary__Sm__Red"
        type="submit"
        value="Submit"
        style={style.button}
      />
    </form>
  );
};

export default Rate;

Rate.propTypes = {
  data: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired
};
