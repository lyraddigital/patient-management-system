import React from 'react';import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Dashboard from './pages/Dashboard';
import ViewPatientPage from './pages/ViewPatientPage';

function App() { 
  return (
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/patients/:id">
            <ViewPatientPage />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
