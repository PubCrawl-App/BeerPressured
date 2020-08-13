import React from 'react';
import { NavLink, BrowserRouter, Redirect } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <NavLink to="/home">CRAWL LIST</NavLink>
      <NavLink to="/createCrawl">CREATE CRAWL</NavLink>
      <NavLink to="/map">MAP</NavLink>
      {/* <NavLink to="/profile"> MY PROFILE</NavLink> */}
    </div>
  );
};

export default NavBar;
