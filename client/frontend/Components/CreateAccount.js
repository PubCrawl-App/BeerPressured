import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = (e) => {
    e.preventDefault();
    const temp = {
      username,
      email,
      password,
    };
    fetch('/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(temp),
    }).then((res) => {
      console.log('response from post', res);
      location.reload();
    });
  };

  const loggedIn = document.cookie.split(';').some((item) => item.trim().startsWith('key='));

  return (
    <div>
      {loggedIn ? <Redirect to="/home" /> : <Redirect to="/createAcc" />}
      <h1>Create your account!</h1>
      <form onSubmit={createUser}>
        <p>Username: </p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <input type="submit" value="Create User" />
        <br />
      </form>
    </div>
  );
};

export default CreateAccount;
