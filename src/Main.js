import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';

const Main = () => (
  <Switch>
    <Route exact path='/' component={LoginPage}></Route>
    {/* Add more routes as needed */}
  </Switch>
);

export default Main;
