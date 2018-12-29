import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Welcome to my Portfolio</h1>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/portfolio">Portfolio</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </header>
);

export default Header;
