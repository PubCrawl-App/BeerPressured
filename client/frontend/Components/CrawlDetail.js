import React, { useState, useEffect } from 'react';
import { data } from '../Mock';
import Attendee from './Attendee';
import { useHistory, withRouter } from 'react-router-dom';

const CrawlDetail = (props) => {
  const { id } = props.location.state;
  const history = useHistory();

  const [crawlDetail, setCrawlDetail] = useState({});
  const [loaded, setLoaded] = useState(false);
  // let attendees;

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  useEffect(() => {
    fetch('/crawls/' + id)
      .then((res) => res.json())
      .then((res) => {
        console.log('res crawl detail: ', res);
        setCrawlDetail(res);
        setLoaded(true);
      });
  }, []);

  const addUser = () => {
    const users_id = getCookie('key');
    console.log('crawls_id:', crawlDetail.userCrawls[0].crawls_id);
    console.log('users_id:', users_id);
    fetch('/attendCrawl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ crawls_id: crawlDetail.userCrawls[0].crawls_id, users_id: users_id }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('response from post:', res);
        fetch('/crawls/' + id)
          .then((res) => res.json())
          .then((res) => {
            console.log('res crawl detail: ', res);
            setCrawlDetail(res);
            setLoaded(true);
          });
      });
  };

  return (
    <div>
      {!loaded ? (
        'Loading...'
      ) : (
        <div>
          <div>
            <h1>Name</h1>
            <p>{crawlDetail.userCrawls[0].crawlname}</p>
          </div>
          <div>
            <h1>Summary</h1>
            <p>{crawlDetail.userCrawls[0].details}</p>
          </div>
          <div>
            <h1>Location</h1>
            <p>{crawlDetail.userCrawls[0].startinglocation}</p>
          </div>
          <div>
            <h1>Schedule</h1>
            <p>{crawlDetail.userCrawls[0].schedule}</p>
          </div>
          <select name="Select1" size="1" id="people">
            <option value="">List of Attendees</option>
            {crawlDetail.attendees.map((el) => (
              <option value={el.username}>{el.username}</option>
            ))}
          </select>
          <button onClick={addUser}>Attend Crawl</button>
          <button onClick={() => history.goBack()}>Go back</button>
        </div>
      )}
    </div>
  );
};

export default withRouter(CrawlDetail);
