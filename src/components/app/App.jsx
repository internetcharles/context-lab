import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Header from '../header/Header';
import CharacterPage from './pages/CharacterPage';
import { setStyles } from '../../hooks/colors';

export default function App() {
  const styles = setStyles();
  return (
    <div style={styles}>
      <Router>
        <Header />
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
