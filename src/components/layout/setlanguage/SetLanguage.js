import React, { Component, Fragment } from 'react';
import LanguagePicker from './LanguagePicker/LanguagePicker';
import Language from './english.svg';
import './SetLanguage.scss';

const questions = <LanguagePicker />;

export class SetLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOthers: false
    };
  }
  handleClick = () => {
    this.setState(state => ({
      displayOthers: !state.displayOthers
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
        {this.state.displayOthers ? questions : false}
      </Fragment>
    );
  }
}

export default SetLanguage;
