import React from 'react';
import { NavLink, Route, Switch, Link } from 'react-router-dom';
import CrawlDetail from './CrawlDetail';

const Crawl = (props) => {
  // const { name, time, location, created_by } = props.data;
  const { id, crawlname, datetime, startinglocation } = props.data;
  return (
    <div className="crawl-container">
      <p>{crawlname}</p>
      <p>{datetime}</p>
      <p>{startinglocation}</p>
      <Link
        to={{ pathname: '/detail/' + crawlname + id, state: { id } }}
      >
        details
      </Link>
      {/* <Link to={`detail/foo`}>My route</Link> */}
    </div>
  );
};

export default Crawl;
