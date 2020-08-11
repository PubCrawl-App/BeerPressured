import React from 'react';

const Crawl = (props) => {
  const { name, time, location, created_by } = props.data;
  return (
    <div>
      <h1>{name}</h1>
      <p>{time}</p>
      <p>{location}</p>
      <p>{created_by}</p>
    </div>
  )
}

export default Crawl;