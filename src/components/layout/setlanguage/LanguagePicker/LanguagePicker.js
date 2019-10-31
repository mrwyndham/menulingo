import React, { Component } from 'react';
import './LanguagePicker.scss';
import Portuguese from '../portuguese.svg';
import French from '../french.svg';

export class LanguagePicker extends Component {
  render() {
    return (
      <div class="LanguagePicker">
        <img src={Portuguese} alt="" />
        <img src={French} alt="" />
      </div>
    );
  }
}

export default LanguagePicker;
