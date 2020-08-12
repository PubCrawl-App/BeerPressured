import React, { useState, useEffect } from "react";
import Crawl from './Crawl'
import { data } from '../Mock';

const Home = () => {
  const [crawlData, setCrawlData] = useState([]);

  useEffect(() => {
    fetch('/home')
      .then((res) => res.json())
      .then((res) => {
        setCrawlData(res)
      })
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = crawlData.filtered((el) => el.crawlname.includes(e.target.value))
    setCrawlData(filtered);    
  }

  return (
    <div>
      <input type='text' placeholder='Crawl Search'></input>
      <input type='submit' onSubmit={handleSubmit}></input>
      {/* <input type='text' placeholder='Created By'></input>
      <input type='submit'></input> */}
      {crawlData.map(el => <Crawl data={el} />)}
    </div>
  );

}
 
export default Home;