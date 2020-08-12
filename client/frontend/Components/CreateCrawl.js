import React from 'react';
import NavBar from './NavBar';
import GoogleCoordinates from './GoogleCoordinates';
const CreateCrawl = () => {
  //make sure on submit post request to database

  return (
    <div>
      <NavBar />
      <form>
        <label>Name: </label>
        <input name='Name'></input><br></br>
        <label>Summary: </label>
        <input name='Summary'></input><br></br>
        <label>Schedule: </label>
        <input name='Schedule'></input><br></br>
        <label>Date/Time: </label>
        <input name='time'></input><br></br>
        <label>Starting Location: </label>
        <GoogleCoordinates /><br></br>
        <button>Create Crawl!</button>
      </form>
    </div>
  )

}

export default CreateCrawl;
