import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/tokensignin');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
      console.log('Signed in as: ' + xhr.responseText);
    };
    xhr.send('idtoken=' + id_token);
  }

  const userLogin = (e) => {
    e.preventDefault();
    const temp = {
      email,
      password,
    };
    fetch('/login/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(temp),
    }).then(() => {
      setEmail('');
      setPassword('');
    });
    // .then((res) => res.json())
    // .then((res) => {
    //   console.log('response from post', res);
    // });
  };

  return (
    <div>
      <h1>SIGN IN TO PUBCRAWL</h1>
      <form onSubmit={userLogin}>
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
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
      {/* <div className='login-button'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" class="google logo"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"></path><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"></path><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"></path><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"></path></svg>
        <a href='/auth/user' className='btn googleBtn'>Google</a> </div> */}
    </div>
  );
};

export default Login;
