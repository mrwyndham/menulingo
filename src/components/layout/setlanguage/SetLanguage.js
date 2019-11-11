import React, { Component, Fragment } from 'react';
import LanguagePicker from './LanguagePicker/LanguagePicker';
import English from './english.svg';
import Portuguese from './portuguese.svg';
import French from './french.svg';
import Italian from './italian.svg';
import Chinese from './chinese.svg';
import './SetLanguage.scss';

const languages = [Portuguese, French, English, Italian, Chinese];

export class SetLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLanguagePicker: false,
      languageIcon: English
    };
  }
  handleClick = () => {
    this.setState(state => ({
      displayLanguagePicker: !state.displayLanguagePicker
    }));
  };
  handlePickedLanguage = updatedLanguage => {
    this.setState(state => ({
      languageIcon: languages[updatedLanguage]
    }));
  };
  render() {
    const languagePicker = (
      <LanguagePicker
        language={languages}
        onPickedLanguage={this.handlePickedLanguage}
      />
    );
    return (
      <Fragment>
        <img
          className="Language"
          src={this.state.languageIcon}
          alt=""
          onClick={this.handleClick}
        />
        {this.state.displayLanguagePicker ? languagePicker : false}
      </Fragment>
    );
  }
}

export default SetLanguage;
