import React, { useState } from 'react';
import GoogleCoordinates from './GoogleCoordinates';

const CreateCrawl = () => {
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [schedule, setSchedule] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState(null);

  // crawlname, startinglocation, details, schedule, datetime, lat, lon;

  const addEvent = (e) => {
    e.preventDefault();
    const temp = {
      schedule,
      crawlname: name,
      details: summary,
      datetime: time,
      startinglocation: place.place,
      lat: place.coordinates.lat,
      lon: place.coordinates.lng,
    };
    console.log('temp', temp);
    fetch('/createCrawl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(temp),
    });
  };

  return (
    <div>
<<<<<<< HEAD
      <form onSubmit={addEvent}>
        <label>Name:</label>
        <input name="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Summary: </label>
        <input name="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} />
        <br />
        <label>Schedule: </label>
        <input name="Schedule" value={schedule} onChange={(e) => setSchedule(e.target.value)} />
        <br />
        <label>Date/Time: </label>
        <input name="Time" value={time} onChange={(e) => setTime(e.target.value)} />
        <br />
        <label>Starting Location: </label>
        <GoogleCoordinates setPlace={setPlace} />
        <br />
        <input type="submit" value="Create A New Crawl" />
=======
      <NavBar />
      <form>
        <label>Name: </label>
        <input name="Name"></input>
        <br></br>
        <label>Summary: </label>
        <input name="Summary"></input>
        <br></br>
        <label>Schedule: </label>
        <input name="Schedule"></input>
        <br></br>
        <label>Date/Time: </label>
        <input name="time"></input>
        <br></br>
        <label>Starting Location: </label>
        <GoogleCoordinates />
        <br></br>
        <button>Create Crawl!</button>
>>>>>>> 5fedc8841fba74d49517ba3e49c57bb76acd1749
      </form>
    </div>
  );
};

export default CreateCrawl;
