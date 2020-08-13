<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React from 'react';
import NavBar from './NavBar';
>>>>>>> 5fedc8841fba74d49517ba3e49c57bb76acd1749
import Crawl from './Crawl';
import { data } from '../Mock';

const Home = () => {
  const [crawlData, setCrawlData] = useState([]);
  const [search, setSearch] = useState('');
  const [initialFetchData, setInitialFetchData] = useState([]);

<<<<<<< HEAD
  useEffect(() => {
    fetch('/home')
      .then((res) => res.json())
      .then((res) => {
        setCrawlData(res);
        setInitialFetchData(res);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length === 0) {
      setCrawlData(initialFetchData);
      setSearch('');
    } else {
      const filtered = initialFetchData.filter((el) => el.crawlname.includes(search));
      setCrawlData(filtered);
      setSearch('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Crawl Search"
        />
        <input type="submit" value="Search" />
      </form>
      {crawlData.map((el) => (
        <Crawl data={el} />
      ))}
=======
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
>>>>>>> 5fedc8841fba74d49517ba3e49c57bb76acd1749
    </div>
  );
};

export default Home;
