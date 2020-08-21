import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import { Redirect } from 'react-router-dom';

// const location = {
//   address: '1600 Amphitheatre Parkway, Mountain View, california.',
//   lat: 37.42216,
//   lng: -122.08427,
// }

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const GoogleMap = ({ location }) => {
  const [crawlData, setCrawlData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/home')
      .then((res) => res.json())
      .then((res) => {
        setCrawlData(res);
        setLoading(true);
      });
  }, []);

  return (
    <div className="map">
      <h2 className="map-h2">Location of Bar Crawl</h2>

      <div className="google-map" id="google-map-me">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.API_KEY }}
          defaultCenter={location}
          defaultZoom={15}
        >
          {/* <LocationPin lat={location.lat} lng={location.lng} text={location.address} /> */}
          {crawlData.map((el) => (
            <LocationPin lat={el.lat} lng={el.lon} text={el.crawlname} />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default GoogleMap;
