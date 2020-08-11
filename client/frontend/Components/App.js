import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import CrawlDetail from './CrawlDetail';
import CreateCrawl from "./CreateCrawl";
import Profile from './Profile';

//import './App.scss'

const App = () => {
  // verify users
  // const loggedIn = document.cookie.split(';').some((item) => item.trim().startsWith('token='));

  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path='/'>
    //       {loggedIn ? <Home /> : <Redirect to='/signin' />}
    //     </Route>
    //     <Route exact path='/signin'>
    //       <Login />
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
    <div>
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <CrawlDetail /> */}
      {/* <CreateCrawl /> */}
      <Profile />
    </div>
  );
};
export default App;
