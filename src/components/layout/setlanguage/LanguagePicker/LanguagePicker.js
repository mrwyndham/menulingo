import React from "react";
import "./LanguagePicker.scss";

const LanguagePicker = props => {
  let handleClick = e => {
    props.onPickedLanguage(e.currentTarget.id);
  };
  const languages = props.language.map((language, index) => (
    <div
      key={language.name}
      id={language.name}
      className="LanguagePicker--Language"
      onClick={handleClick}
    >
      {language.flag}
    </div>
  ));
  return (
    <div>
      <div className="LanguagePicker">{languages}</div>
    </div>
  );
};

export default LanguagePicker;
