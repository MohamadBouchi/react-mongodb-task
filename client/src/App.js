import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { ApolloProvider } from "react-apollo";
import {client} from './index'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/login' component={Login} />
        </Switch>
        </div>
      </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
