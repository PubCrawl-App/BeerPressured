import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './Home';
import Login from './Login';
import style from '../style.css';

const App = () => {
  // verify users
  const loggedIn = document.cookie.split(';').some((item) => item.trim().startsWith('token='));

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {loggedIn ? <HomePage /> : <Redirect to='/signin' />}
          </Route>
          <Route exact path='/signin'>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
