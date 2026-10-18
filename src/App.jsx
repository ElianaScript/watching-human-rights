import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from './components/banner';

import Home from './pages/home';

const App = () => {
  return (
  <>
  <Banner />
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  </>
  );
};

export default App;
