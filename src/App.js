import React from 'react';
import './App.scss';
import logo from './components/layout/logo/icon_primary.svg';
import english from './components/widgets/LanguagePicker/english.svg';
import bg from './assets/bg.jpg';

let primaryColor = '#E02424';
let fontFamily = 'roboto, sans-serif';

let style = {
  featureBackground: {
    backgroundColor: primaryColor
  },
  contentBackground: {
    backgroundImage: `url()`,
    backgroundPosition: '25% 70%',
    backgroundSize: 'auto 120vh, cover'
  },
  underlineColor: {
    border: `solid ${primaryColor} 0.25rem`
  },
  titleText: {
    fontFamily: fontFamily,
    color: primaryColor,
    fontWeight: 'bold',
    fontSize: '1.75rem'
  },
  menuButtonColor: {
    fontFamily: fontFamily,
    color: '#ffffff',
    fontSize: '1rem',
    backgroundColor: primaryColor
  }
};

const App = () => {
  return (
    <div className="App">
      <div className="App--Feature" style={style.featureBackground}></div>
      <div className="App--Content" style={style.contentBackground}>
        <div>
          <img className="Language" src={english} alt="" />
        </div>
        <div>
          <div className="Logo">
            <img src={logo} alt="" />
          </div>
          <div className="Title">
            <h1 className="Title--Heading" style={style.titleText}>
              PYSCO
            </h1>
            <span className="Title--Underline">
              <hr style={style.underlineColor} />
              <hr style={style.underlineColor} />
            </span>
          </div>
        </div>
        <div>
          <button className="Button--Menu" style={style.menuButtonColor}>
            MENU
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
