import React from 'react';

const Crawl = (props) => {
  // const { name, time, location, created_by } = props.data;
  const { crawlname, datetime, startinglocation } = props.data
  return (
    <div className='crawl-container'>
      <p>{crawlname}</p>
      <p>{datetime}</p>
      <p>{startinglocation}</p>
    </div>
  )
}

export default Crawl;