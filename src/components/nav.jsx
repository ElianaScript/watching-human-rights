import React from 'react';
import { NavLink } from 'react-router-dom';

const nav = () => (
  <nav>
    <NavLink to="/home">Home</NavLink> |{' '}
    <NavLink to="/home">Interviews</NavLink> |{' '}

  </nav>
);

export default nav;