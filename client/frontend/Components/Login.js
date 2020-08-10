import React, { Component } from "react";

const Login = () => {

  const googleAuth = () => {
    // make a request to backend
    
  }

  const githubAuth = () => {
    // make a request to backend
  }

  const linkedInAuth = () => {
    // make a request to backend
  }

  return (
    <div>
      <h1>Sign In to PubCrawl!</h1>
      <button onClick={googleAuth}>Log in with Google</button>
      <button>Log in with Github</button>
      <button>Log in with LinkedIn</button>
    </div>
  )

}

export default Login;