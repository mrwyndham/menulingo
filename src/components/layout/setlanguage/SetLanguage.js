import React, { Fragment, useState } from "react";
import LanguagePicker from "./LanguagePicker/LanguagePicker";
import "./SetLanguage.scss";
import { setLanguage } from "../../../redux/actions/menuActions";
import { connect } from "react-redux";
const SetLanguage = props => {
  const [displayLanguagePicker, setDisplayLanguagePicker] = useState(false);
  const [languageIcon, setLanguageIcon] = useState(props.languages[0].flag);

  const handleClick = () => {
    setDisplayLanguagePicker(!displayLanguagePicker);
  };
  const handlePickedLanguage = updatedLanguage => {
    const newLanguage = props.languages.filter(x => x.name === updatedLanguage);
    setLanguageIcon(newLanguage[0].flag);
    props.setLanguage(newLanguage[0].name);
  };
  const languagePicker = (
    <LanguagePicker
      language={props.languages}
      onPickedLanguage={handlePickedLanguage}
    />
  );
  return (
    <Fragment>
      <div className="Language" onClick={handleClick}>
        {languageIcon}
      </div>
      {displayLanguagePicker ? languagePicker : false}
    </Fragment>
  );
};
const mapStateToProps = state => ({
  language: state.language
});

export default connect(mapStateToProps, { setLanguage })(SetLanguage);
