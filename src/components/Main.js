import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';

const Main = () => (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    {/* Add more routes as needed */}
  </Routes>
);

export default Main;