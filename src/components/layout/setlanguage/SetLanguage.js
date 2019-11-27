import React, { Component, Fragment } from "react";
import LanguagePicker from "./LanguagePicker/LanguagePicker";
import "./SetLanguage.scss";

export class SetLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLanguagePicker: false,
      languageIcon: this.props.languages[0].flag
    };
  }
  handleClick = () => {
    this.setState(state => ({
      displayLanguagePicker: !state.displayLanguagePicker
    }));
  };
  handlePickedLanguage = updatedLanguage => {
    const newLanguage = this.props.languages.filter(
      x => x.name === updatedLanguage
    );
    console.log(newLanguage);
    this.setState(state => ({
      languageIcon: newLanguage[0].flag
    }));
  };
  render() {
    const languagePicker = (
      <LanguagePicker
        language={this.props.languages}
        onPickedLanguage={this.handlePickedLanguage}
      />
    );
    return (
      <Fragment>
        <div className="Language" onClick={this.handleClick}>
          {this.state.languageIcon}
        </div>
        {this.state.displayLanguagePicker ? languagePicker : false}
      </Fragment>
    );
  }
}

export default SetLanguage;
