import React from 'react';
import Start from './components/pages/Start';
import Menu from './components/pages/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Start} />
        <Route path="/menu" component={Menu} />
      </div>
    </Router>
  );
};

export default App;
