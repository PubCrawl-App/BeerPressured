<<<<<<< HEAD
import React, { useState } from 'react';

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
    })
      .then((res) => res.json())
      .then((res) => console.log('response from post', res));
  };
=======
import React from 'react';

const CreateAccount = () => {
  //post request to database
>>>>>>> 5fedc8841fba74d49517ba3e49c57bb76acd1749

  return (
    <div>
      <h1>Create your account!</h1>
<<<<<<< HEAD
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
=======
      <form>
        <label for="uname">Username:</label>
        <br></br>
        <input type="text" id="uname" name="uname" />
        <br></br>
        <label for="email">Email:</label>
        <br></br>
        <input type="text" id="email" name="email" />
        <br></br>
        <label for="pass">Password:</label>
        <br></br>
        <input type="text" id="pass" name="pass" />
        <br></br>
        <input type="submit" value="Create Account"></input>
>>>>>>> 5fedc8841fba74d49517ba3e49c57bb76acd1749
      </form>
    </div>
  );
};

export default CreateAccount;
