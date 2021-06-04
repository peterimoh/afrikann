import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './screens/HomePage'
import { Provider } from 'react-redux'
import store from '../src/redux/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      </Router>
    </Provider>

  );
}

export default App;

