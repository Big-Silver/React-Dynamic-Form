import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingUI from './UI';

const Landing = () => {
  const { pathname } = useLocation();

  return (
    <Routes>
      <Route path={pathname} element={<LandingUI />} />
    </Routes>
  );
};

export default Landing;
