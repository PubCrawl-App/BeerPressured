import React from 'react';
import { NavLink, BrowserRouter, Redirect } from 'react-router-dom';

<<<<<<< HEAD
const NavBar = () => {
    return (
      <div className="navbar-container">
            <NavLink to='/home'>CRAWL LIST</NavLink>
            <NavLink to='/createCrawl'>CREATE CRAWL</NavLink>
            <NavLink to='/map'>MAP</NavLink>
            <NavLink to='/profile'> MY PROFILE</NavLink>
      </div>
    );
=======
const Navbar = () => {
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
>>>>>>> 5fedc8841fba74d49517ba3e49c57bb76acd1749

export default Navbar;
