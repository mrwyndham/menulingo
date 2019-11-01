import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/pages/Menu';
import Start from './components/pages/Start';
import Order from './components/pages/Order';
import Rate from './components/pages/Rate';
import About from './components/pages/About';
import Header from './components/layout/header/Header';
import Navbar from './components/layout/navbar/Navbar';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Header title={'PYSCO'} />
      <Route path="/" exact component={Menu} />
      <Route path="/order" component={Order} />
      <Route path="/rate" component={Rate} />
      <Route path="/about" component={About} />
      <Route path="/start" component={Start} />
      <div className="fixed-bottom">
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
