import React from 'react';
import NavBar from './NavBar';
import { data } from '../Mock';
import Attendee from './Attendee';

const CrawlDetail = () => {

  const attendees = [];
    for (const el of data) {
      attendees.push(<Attendee data={el}/>)
  }

  return (
    <div>
      <NavBar />
      <div><h1>Name</h1><p>{data[0].name}</p></div>
      <div><h1>Summary</h1><p>{data[0].summary}</p></div>
      <div><h1>Location</h1><p>{data[0].location}</p></div>
      <div><h1>Schedule</h1><p>{data[0].time}</p></div>
      <select name="Select1" size="1" id="ddlCars">
        <option value="">List of Attendees</option>
        {attendees}
      </select>
    </div>
  )

}

export default CrawlDetail;