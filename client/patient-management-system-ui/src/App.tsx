import React from 'react';import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import DashboardPage from './pages/DashboardPage';
import NewPatientPage from './pages/NewPatientPage';
import ViewPatientPage from './pages/ViewPatientPage';

function App() { 
  return (
      <Router>
        <Switch>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/patients/new">
            <NewPatientPage />
          </Route>
          <Route path="/patients/:id">
            <ViewPatientPage />
          </Route>
          <Route path="/">
            <DashboardPage />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
