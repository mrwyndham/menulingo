import React from 'react';
import Heart from './assets/heart.svg';
import './RateSlider.scss';

const RateSlider = () => {
  return (
    <div class="RateSlider">
      <div className="RateSlider--Heart">
        <img src={Heart} alt="" />
      </div>
      <div className="RateSlider--Heart">
        <img src={Heart} alt="" />
      </div>
      <div className="RateSlider--Heart">
        <img src={Heart} alt="" />
      </div>
      <div className="RateSlider--Heart">
        <img src={Heart} alt="" />
      </div>
      <div className="RateSlider--Heart">
        <img src={Heart} alt="" />
      </div>
    </div>
  );
};

export default RateSlider;
