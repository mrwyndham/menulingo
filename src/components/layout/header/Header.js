import React from 'react';
import Language from '../setlanguage/SetLanguage';
import './Header.scss';

const Header = props => {
  return (
    <div
      className="Header"
      style={{
        backgroundImage: `url(${props.style.backgroundImage})`,
        backgroundColor: `${props.style.backgroundColor}`
      }}
    >
      <div className="Header-Item flex-end">
        <div className="Logo">
          <img src={props.style.logo} alt="" />
        </div>
      </div>

      <div className="Header-Item">
        <h1
          className="Title"
          style={{
            fontFamily: `${props.style.title.font}`,
            color: `${props.style.title.color}`,
            fontSize: `${props.style.title.size}`
          }}
        >
          {props.style.title.name}
        </h1>
      </div>

      <div className="Header-Item flex-start">
        <Language />
      </div>
    </div>
  );
};

export default Header;
