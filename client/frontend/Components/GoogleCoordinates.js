import { GoogleComponent } from 'react-google-location';
import React, { Component } from 'react';

const API_KEY = process.env.API_KEY;
// const API_KEY = 'AIzaSyBocV_s8PP94rcQYj51LXNbP957tHl9kxo';  // how to get key - step are below

class GoogleCordinates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: null,
    };
  }

  render() {
    console.log('API KEY: ', process.env);
    console.log('data: ', this.state.place);
    return (
      <div>
        <GoogleComponent
          apiKey={API_KEY}
          language={'en'}
          country={'country:us'}
          coordinates={true}
          placeholder={'Enter address'}
          // locationBoxStyle={'custom-style'}
          // locationListStyle={'custom-style-list'}
          onChange={(e) => {
            this.setState({ place: e });
          }}
        />
      </div>
    );
  }
}

export default GoogleCordinates;
