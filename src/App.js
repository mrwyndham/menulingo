import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/pages/Menu';
import Start from './components/pages/Start';
import Order from './components/pages/Order';
import Rate from './components/pages/Rate';
import Header from './components/layout/header/Header';
import Navbar from './components/layout/navbar/Navbar';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Menu} />
      <Route path="/order" component={Order} />
      <Route path="/rate" component={Rate} />
      <Route path="/start" component={Start} />
      <div className="fixed-bottom">
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
