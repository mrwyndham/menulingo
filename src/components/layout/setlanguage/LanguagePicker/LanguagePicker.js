import React from 'react';
import './LanguagePicker.scss';

const LanguagePicker = props => {
  let handleClick = e => {
    props.onPickedLanguage(e.target.alt);
  };
  const languages = props.language.map((language, index) => (
    <img src={language} alt={index} onClick={handleClick} />
  ));
  return (
    <div>
      <div class="LanguagePicker">{languages}</div>
    </div>
  );
};

export default LanguagePicker;
