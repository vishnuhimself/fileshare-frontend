import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        {/* Add more routes as needed */}
      </Switch>
    </main>
  );
}

export default Main;