import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Logo from './assets/logo/icon_primary.svg';
import Menu from './components/pages/Menu';
import Start from './components/pages/Start';
import Order from './components/pages/Order';
import Rate from './components/pages/Rate';
import About from './components/pages/About';
import Header from './components/layout/header/Header';
import Navbar from './components/layout/navbar/Navbar';
import MenuItemList from './components/pages/menu/MenuItemList';
import './App.scss';

const App = () => {
  const clientStyle = {
    header: {
      title: {
        name: 'PO PO CHINESE',
        font: "'Yeon Sung', cursive",
        color: '#afafaf',
        size: '3.75vh'
      },
      logo: Logo,
      backgroundImage: '',
      backgroundColor: '#333333'
    },
    menu: {
      backgroundColor: '#333333'
    },
    order: {},
    rate: {},
    about: {},
    navbar: {
      backgroundImage: '',
      backgroundColor: '#333333',
      color: '#afafaf'
    }
  };
  return (
    <div className="overflow">
      <Router>
        <div className="fixed-top">
          <Header style={clientStyle.header} />
        </div>
        <Route path="/" exact component={Menu} />
        <Route path="/catagory/:catagory" exact component={MenuItemList} />
        <Route path="/order" component={Order} />
        <Route path="/rate" component={Rate} />
        <Route path="/about" component={About} />
        <Route path="/start" component={Start} />
        <div className="fixed-bottom">
          <Navbar style={clientStyle} />
        </div>
      </Router>
    </div>
  );
};

export default App;
