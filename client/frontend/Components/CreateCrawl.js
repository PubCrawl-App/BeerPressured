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
      <form onSubmit={addEvent} className="createcrawl-form">
        <label>Name:</label>
        <input name="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Summary: </label>
        <input name="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} />
        <br />
        <label>Schedule/Description: </label>
        <input name="Schedule" value={schedule} onChange={(e) => setSchedule(e.target.value)} />
        <br />
        <label>Date/Time: </label>
        <input name="Time" value={time} onChange={(e) => setTime(e.target.value)} />
        <br />
        <label>Starting Location: </label>
        <GoogleCoordinates setPlace={setPlace} />
        <br />
        <input type="submit" value="Create A New Crawl" />
      </form>
    </div>
  );
};

export default CreateCrawl;
