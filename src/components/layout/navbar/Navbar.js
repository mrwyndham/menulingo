import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import Menu from './assets/menu.svg';
import Order from './assets/order.svg';
import Rate from './assets/rate.svg';
import About from './assets/about.svg';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>
            <img src={Menu} alt="" />
          </li>
        </Link>
        <Link to="/order">
          <li>
            <img src={Order} alt="" />
          </li>
        </Link>
        <Link to="/rate">
          <li>
            <img src={Rate} alt="" />
          </li>
        </Link>
        <Link to="/about">
          <li>
            <img src={About} alt="" />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
