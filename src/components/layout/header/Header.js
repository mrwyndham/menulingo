import React from 'react';
import english from '../../widgets/LanguagePicker/english.svg';
import logo from '../../../assets/logo/icon_primary.svg';
import './Header.scss';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-Item flex-center">
        <div className="Logo">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="Header-Item">
        <h1 className="Title">PYSCO</h1>
      </div>

      <div className="Header-Item">
        <img className="Language" src={english} alt="" />
      </div>
    </div>
  );
};

export default Header;
