import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from './components/banner';

import Home from './pages/home';
import Interviews from './pages/interviews';

const App = () => {
  return (
  <>
  <Banner />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/interviews" element={<Interviews />} />
  </Routes>
  </>
  );
};

export default App;
