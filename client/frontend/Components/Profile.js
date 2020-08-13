import React, { useState } from 'react';
import { userData, data } from '../Mock';

const Profile = () => {
  const [val, setVal] = useState(userData.feeling);
<<<<<<< HEAD
  const [name, setName] = useState('');

  // useEffect(() => {
  //   fetch('/users')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setCrawlData(res);
  //       setInitialFetchData(res);
  //     });
  // }, []);
=======

  // fetch request for the userdata initial render and also list of crawls for userdata.id
  const crawlArr = [];
  for (const el of data) {
    crawlArr.push(<p>{el.name}</p>);
  }

  const testing123 = (e) => {
    setVal(e.target.value);
    // post request to database to update userData with new feeling number
  };
>>>>>>> 5fedc8841fba74d49517ba3e49c57bb76acd1749

  return (
    <div>
      <h1>Username</h1>
      <p>{userData.name}</p>
<<<<<<< HEAD
      <div className="slidecontainer">
=======
      <h1>About Me</h1>
      <p>{userData.aboutme}</p>
      <div class="slidecontainer">
>>>>>>> 5fedc8841fba74d49517ba3e49c57bb76acd1749
        <input
          type="range"
          min="1"
          max="10"
<<<<<<< HEAD
          className="slider"
=======
          class="slider"
>>>>>>> 5fedc8841fba74d49517ba3e49c57bb76acd1749
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
