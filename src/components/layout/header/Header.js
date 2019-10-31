import React, { Component } from 'react';
import Language from '../setlanguage/SetLanguage';
import logo from '../../../assets/logo/icon_primary.svg';
import './Header.scss';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static defaultProps = {
    title: 'PYSCO',
    icon: logo
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };
  render() {
    return (
      <div className="Header">
        <div className="Header-Item flex-end">
          <div className="Logo">
            <img src={this.props.icon} alt="" />
          </div>
        </div>

        <div className="Header-Item">
          <h1 className="Title">{this.props.title}</h1>
        </div>

        <div className="Header-Item flex-start">
          <Language />
        </div>
      </div>
    );
  }
}
