import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Switch>
            <Route path='/login' component={Login} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
