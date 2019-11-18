import React from "react";
import "./RateSlider.scss";
import { Rating } from "semantic-ui-react";

const RateSlider = props => {
  return (
    <div class="RateSlider">
      <Rating
        icon="heart"
        maxRating={5}
        onRate={props.handleRate}
        catagory={props.catagory}
      />
    </div>
  );
};

export default RateSlider;
