// we want to import Component destructured from react to use it in our class
import React, { Component } from 'react';

// this obtains all utilities from Component to App
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world subscribe to wittcode!</h1>
      </div>
    );
  }
}

// this makes this file available to other files
export default App;
