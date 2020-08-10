import React, { Component } from "react";
import AllenBean from "./AllenBean.jsx";

// const App = () => {
//   return <h1> HEY GUYS </h1>;
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <AllenBean />
      </div>
    );
  }
}

export default App;
