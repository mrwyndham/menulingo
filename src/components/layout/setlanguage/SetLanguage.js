import React, { Fragment, useState } from "react";
import LanguagePicker from "./LanguagePicker/LanguagePicker";
import "./SetLanguage.scss";
import { setLanguage } from "../../../redux/actions/menuActions";
import { connect } from "react-redux";
const SetLanguage = props => {
  const [displayLanguagePicker, setDisplayLanguagePicker] = useState(false);

  const handleInitialFlag = lang => {
    const defaultLanguage = "en";
    const parts = `${window.location.href}`.split("/");
    lang = `${parts[3]}`;
    !lang && (lang = defaultLanguage);

    for (const index in props.languages) {
      if (lang === props.languages[index].name) {
        return props.languages[index].flag;
      }
    }
  };

  const [languageIcon, setLanguageIcon] = useState(
    handleInitialFlag(props.menu.language)
  );

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
  menu: state.menu
});

export default connect(mapStateToProps, { setLanguage })(SetLanguage);
