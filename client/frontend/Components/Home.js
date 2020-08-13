import React, { useState, useEffect } from 'react';
import Crawl from './Crawl';
import { data } from '../Mock';

const Home = () => {
  const [crawlData, setCrawlData] = useState([]);
  const [search, setSearch] = useState('');
  const [initialFetchData, setInitialFetchData] = useState([]);

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
    </div>
  );
};

export default Home;
