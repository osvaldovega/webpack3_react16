import React from 'react';  // eslint-disable-line
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
  </header>
);

export default Header;
