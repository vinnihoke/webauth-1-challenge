import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './auth/PrivateRoute.js';

import Dashboard from './views/Dashboard';
import AuthFlow from './views/AuthFlow.jsx';

function App() {
  return (
    <Router>
      <AuthFlow />
      <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />>
      </Switch>
    </Router>
  );
}

export default App;
