/* eslint-disable react/button-has-type */
import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId = '1056890442611-8hj0b6phoo8k6kpd0a532gc1f63sq4eo.apps.googleusercontent.com';

const LogoutButton = () => {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success ');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon" />
      <span className="buttonText">Sign out</span>
    </button>
  );
};

export default LogoutButton;
