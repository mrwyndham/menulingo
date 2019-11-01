import React, { Component, Fragment } from 'react';
import LanguagePicker from './LanguagePicker/LanguagePicker';
import Language from './english.svg';
import './SetLanguage.scss';

const languagePicker = <LanguagePicker />;

export class SetLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLanguagePicker: false
    };
  }
  handleClick = () => {
    this.setState(state => ({
      displayLanguagePicker: !state.displayLanguagePicker
    }));
  };
  render() {
    return (
      <Fragment>
        <img
          className="Language"
          src={Language}
          alt=""
          onClick={this.handleClick}
        />
        {this.state.displayLanguagePicker ? languagePicker : false}
      </Fragment>
    );
  }
}

export default SetLanguage;
