import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Switch>
            <Route path='/' component={Dashboard} />
            <Route path='/login' component={Login} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
