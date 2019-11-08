import React from 'react';
import './MenuCatagoryCard.scss';

const MenuCatagoryCard = props => {
  let style = {
    contentBackground: {
      backgroundImage: `url(${props.image})`,
      backgroundPosition: '25% 70%',
      backgroundSize: 'auto 120vh, cover',
      filter: 'brightness(40%)'
    }
  };
  return (
    <div className="MenuCatagory">
      <div
        className="MenuCatagory--Image"
        style={style.contentBackground}
      ></div>
      <div className="MenuCatagory--Text">
        <div className="MenuCatagory--Name">{props.name}</div>
        <div className="MenuCatagory--Description">{props.description}</div>
      </div>
    </div>
  );
};

export default MenuCatagoryCard;
