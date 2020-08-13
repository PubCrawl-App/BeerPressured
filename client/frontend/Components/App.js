import React, { useEffect, useState, Component } from 'react';
import { NavLink, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import CrawlDetail from './CrawlDetail';
import CreateCrawl from './CreateCrawl';
import Profile from './Profile';
import GoogleCoordinates from './GoogleCoordinates';
import GoogleMap from './Map';
import CreateAccount from './CreateAccount';
import NavBar from './NavBar';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 40.40615570000001,
  lng: -74.4129016,
};

const App = () => {
  // verify users
  // const [loggedIn, setLoggedIn] = useState(
  //   document.cookie.split(';').some((item) => item.trim().startsWith('key='))
  // );

  // useEffect(() => {
  //   const cookie = document.cookie.split(';').some((item) => item.trim().startsWith('key='));
  //   setLoggedIn(cookie);
  // });

  const loggedIn = document.cookie.split(';').some((item) => item.trim().startsWith('key='));

  return (
    <div>
      {console.log('loggedIn', loggedIn)}
      <BrowserRouter>
        {loggedIn && <NavBar />}
        <Switch>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/home" /> : <Redirect to="/signin" />}
            {/* {loggedIn && <Redirect to="/home" />} */}
            {/* {!loggedIn && <Redirect to="/signin" />} */} */}
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/signin">
            {loggedIn ? <Redirect to="/home" /> : <Login />}
            {/* <Login /> */}
          </Route>
          <Route exact path="/createCrawl">
            <CreateCrawl />
          </Route>
          <Route exact path="/map">
            <GoogleMap location={location} />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/createAcc">
            <CreateAccount />
          </Route>
          <Route path="/detail">
            <CrawlDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
