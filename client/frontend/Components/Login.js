import React, { useState, Component } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const userLogin = (e) => {
    e.preventDefault();
    const temp = {
      email,
      password,
    };
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(temp),
    }).then(() => {
      setEmail('');
      setPassword('');
      location.reload();
    });
  };

  return (
    <div id='login-background'>
      <h1>BEER PRESSURE</h1>
      <div className="loginBox">
        <form className="loginForm" onSubmit={userLogin}>
          <p>Email: </p>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password: </p>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="submit" value="Sign In" />
          <br />
        </form>
        <NavLink to="/createAcc"> CREATE ACCOUNT</NavLink>
        <p>Or Sign in with Google!</p>
        <LoginButton />
      </div>
      {/* <LogoutButton /> */}
      {/* <div id="beerBuddyDiv">
        <img
          className="beerBuddy"
          src="https://i.pinimg.com/originals/0c/48/86/0c488659132e5742a52a02ea4edfb11b.gif"
        />
      </div> */}
    </div>
  );
};
export default Login;
