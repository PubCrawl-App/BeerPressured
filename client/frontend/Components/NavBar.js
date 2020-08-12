import React from 'react';
import { NavLink, BrowserRouter, Redirect } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-container">
      {/* <a className="nav-btn" href="/home">HOME</a>
          <a className="nav-btn" href="/create">CREATE CRAWL</a>
          <a className="nav-btn" href="#">MAP</a>
          <a className="nav-btn" href="#">PROFILE</a> */}
      {/* <BrowserRouter> */}
      <NavLink to="/createHome">CREATE CRAWL</NavLink>
      <NavLink to="/home">See crawl List</NavLink>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default NavBar;
