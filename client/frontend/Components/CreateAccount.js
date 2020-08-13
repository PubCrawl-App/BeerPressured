import React from 'react';

const CreateAccount = () => {
  //post request to database

  return (
    <div>
      <h1>Create your account!</h1>
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
      </form>
    </div>
  );
};

export default CreateAccount;
