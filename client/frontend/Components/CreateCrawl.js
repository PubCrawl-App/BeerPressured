import React from 'react';
import NavBar from './NavBar';
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
        <label>Location: </label>
        <input name='Location'></input><br></br>
        <label>Schedule: </label>
        <input name='Schedule'></input><br></br>
        <button>Create Crawl!</button>
      </form>
    </div>
  )

}

export default CreateCrawl;
