import React, { Component } from 'react';
import { NavLink, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import CrawlDetail from './CrawlDetail';
import CreateCrawl from './CreateCrawl';
import Profile from './Profile';
import GoogleCoordinates from './GoogleCoordinates';
import GoogleMap from './Map';
import CreateAccount from './CreateAccount';
import NavBar from './Navbar';

//import './App.scss'
const location = {
  address: 'Death & Company',
  lat: 40.72592,
  lng: -73.9846452,
};

// const deathAndCompany = {
//   address: '433 E 6th St, New York, NY 10009',
// }

const App = () => {
  // verify users
  // const loggedIn = document.cookie.split(';').some((item) => item.trim().startsWith('token='));
  const loggedIn = false;

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/home" /> : <Redirect to="/signin" />}
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/createHome">
            <CreateCrawl />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
