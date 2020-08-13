import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';

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

const GoogleMap = ({ location }) => (
  <div className="map">
    <h2 className="map-h2">Location of Bar Crawl</h2>

    <div
      className="google-map"
      style={{ display: 'flex', alignItems: 'center', height: '50vh', width: '50%' }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.API_KEY }}
        defaultCenter={location}
        defaultZoom={15}
      >
        <LocationPin lat={location.lat} lng={location.lng} text={location.address} />
      </GoogleMapReact>
    </div>
  </div>
);

export default GoogleMap;
