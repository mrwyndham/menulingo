import React from 'react';
import './MenuCatagoryCard.scss';

const MenuCatagoryCard = props => {
  let style = {
    contentBackground: {
      backgroundImage: `url(${props.image})`,
      backgroundPosition: '25% 70%',
      backgroundSize: 'auto 120vh, cover'
    }
  };
  return (
    <div>
      <div className="MenuCatagory" style={style.contentBackground}>
        <div className="MenuCatagory--Text">
          <div className="MenuCatagory--Name">{props.name}</div>
          <div className="MenuCatagory--Description">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuCatagoryCard;
