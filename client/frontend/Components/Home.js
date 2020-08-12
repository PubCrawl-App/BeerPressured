import React, { useState, useEffect } from "react";
import Crawl from './Crawl'
import { data } from '../Mock';

const Home = () => {
  const [crawlData, setCrawlData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/home')
      .then((res) => res.json())
      .then((res) => {
        setCrawlData(res)
      })
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length === 0) {
      fetch('/home')
      .then((res) => res.json())
      .then((res) => {
        setCrawlData(res)
      })
    } else {
      // console.log(Array.isArray(crawlData));
      // const filtered = crawlData.filter((el) => el.crawlname.includes(search))
      // console.log('filtered', filtered)
      // setCrawlData(filtered);
      fetch('/home')
      .then((res) => res.json())
      .then((res) => {
        const filtered = res.filter((el) => el.crawlname.includes(search));
        setCrawlData(filtered);
      })
    }   
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type='text' onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Crawl Search'></input>
      <input type='submit' value='Search'></input>
      </form>
      {/* <input type='text' placeholder='Created By'></input>
      <input type='submit'></input> */}
      {crawlData.map(el => <Crawl data={el} />)}
    </div>
  );

}
 
export default Home;