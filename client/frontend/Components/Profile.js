import React, { useState } from 'react';
import { userData, data } from '../Mock';

const Profile = () => {
  const [val, setVal] = useState(userData.feeling);

  return (
    <div>
      <h1>Name</h1>
      <p>{userData.name}</p>
      <h1>About Me</h1>
      <p>{userData.aboutme}</p>
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="10"
          className="slider"
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
