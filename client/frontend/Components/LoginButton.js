/* eslint-disable react/button-has-type */
import React from 'react';
import { useGoogleLogin } from 'react-google-login';

const clientId = '1056890442611-8hj0b6phoo8k6kpd0a532gc1f63sq4eo.apps.googleusercontent.com';

const LoginButton = () => {
  const onSuccess = (res) => {
    console.log('login success', res.profileObj);
    console.log('email', res.profileObj.email);
    fetch('/oauthUserAuth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: res.profileObj.email, password: '0000' }),
    }).then(() => {
      location.reload();
    });
  };

  const onFailure = (res) => {
    console.log('login fauilure', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
      <img src="icons/google.svg" alt="google login" className="icon" />
      <span className="buttonText">Sign in with Google</span>
    </button>
  );
};

export default LoginButton;
