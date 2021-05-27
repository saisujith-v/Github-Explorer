import React, { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';
import Users from './Users/Users';
import User from './Users/User';
import Search from './Users/Search';
import Alert from './Components/Layouts/Alert';
import GithubState from './Context/github/GithubState';
import AlertState from './Context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
    <AlertState>
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Search/>
                  <Users />
                </Fragment>
              )}
            />
            <Route
              exact
              path='/user/:login'
              component={User}
            />
          </Switch>
        </div>
      </div>
    </Router>
    </AlertState>
    </GithubState>
  );
};

export default App;