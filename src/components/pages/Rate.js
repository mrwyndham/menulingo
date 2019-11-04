import React, { Component } from 'react';
import Rate from './rate/RateSlider';
import RateComment from './rate/RateComment';
import './Rate.scss';

export class Evaluate extends Component {
  render() {
    return (
      <div className="Rate">
        <div className="Rate--Catagory">
          <h1 className="Rate--Title">Service</h1>
          <Rate />
        </div>
        <div className="Rate--Catagory">
          <h1 className="Rate--Title">Food</h1>
          <Rate />
        </div>
        <div className="Rate--Catagory">
          <h1 className="Rate--Title">App</h1>
          <Rate />
        </div>
        <div className="Rate--Catagory">
          <h1 className="Rate--Title">Location</h1>
          <Rate />
        </div>
        <div className="Rate--Catagory">
          <h1 className="Rate--Title">Comment</h1>
          <RateComment />
        </div>
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default Evaluate;
