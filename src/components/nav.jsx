import React from 'react';
import { NavLink } from 'react-router-dom';

const nav = () => (
  <nav>
    <NavLink to="/home">Home</NavLink> |{' '}
    <NavLink to="/interviews">Interviews</NavLink> |{' '}

  </nav>
);

export default nav;