import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import CharacterPage from './pages/CharacterPage';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route 
            path="/" 
            exact
            component={CharacterPage} />
        </Switch>
      </Router>
    </div>
  );
}
