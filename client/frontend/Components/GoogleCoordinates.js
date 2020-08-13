import { GoogleComponent } from 'react-google-location';
import React, { useState, Component } from 'react';

const API_KEY = process.env.API_KEY;

const GoogleCoordinates = (props) => {
  // const [place, setPlace] = useState(null);
  const { setPlace } = props;
  return (
    <div>
      {/* {console.log('state', props.place)} */}
      <GoogleComponent
        apiKey={API_KEY}
        language="en"
        country="country:us"
        coordinates="true"
        placeholder="Enter address"
        onChange={(e) => setPlace(e)}
      />
    </div>
  );
};

// class GoogleCoordinates extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       place: null,
//     };
//   }

//   render() {
//     console.log('API KEY: ', process.env)
//     console.log('data: ', this.state.place)
//     return (
//       <div >
//          <GoogleComponent
//           apiKey={API_KEY}
//           language={'en'}
//           country={'country:us'}
//           coordinates={true}
//           placeholder={'Enter address'}
//           // locationBoxStyle={'custom-style'}
//           // locationListStyle={'custom-style-list'}
//           onChange={(e) => { this.setState({ place: e }) }} />
//       </div>

//     )
//   }
// }

export default GoogleCoordinates;
