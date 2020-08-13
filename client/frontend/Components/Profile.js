import React, { useState } from 'react';
import { userData, data } from '../Mock';
import NavBar from './NavBar';

const Profile = () => {
  const [val, setVal] = useState(userData.feeling);

  // fetch request for the userdata initial render and also list of crawls for userdata.id
  const crawlArr = [];
  for (const el of data) {
    crawlArr.push(<p>{el.name}</p>);
  }

  const testing123 = (e) => {
    setVal(e.target.value);
    // post request to database to update userData with new feeling number
  };

  return (
    <div>
      <NavBar />
      <h1>Name</h1>
      <p>{userData.name}</p>
      <h1>About Me</h1>
      <p>{userData.aboutme}</p>
      <div class="slidecontainer">
        <input
          type="range"
          min="1"
          max="10"
          class="slider"
          id="myRange"
          value={val}
          onChange={testing123}
        />
        <p>How are you feeling?</p>
      </div>
      <h1>Attending Crawls</h1>
      {crawlArr}
    </div>
  );
};

export default Profile;
