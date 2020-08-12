import React from 'react';
import NavBar from './NavBar';
import Crawl from './Crawl';
import { data } from '../Mock';

const Home = () => {
  // fetch request here to get data
  // put each crawl component into an array

  // fetch('/getCrawl')
  //   .then((res) => res.json)

  const returnArr = [];
  for (const el of data) {
    returnArr.push(<Crawl data={el} />);
  }

  return (
    <div>
      <input type="text" placeholder="Crawl Search"></input>
      <input type="submit"></input>
      <input type="text" placeholder="Created By"></input>
      <input type="submit"></input>
      {returnArr}
    </div>
  );
};

export default Home;
