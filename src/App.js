// we want to import Component destructured from react to use it in our class
import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';

// this obtains all utilities from Component to App
class App extends Component {
  render() {
    return (
      <div className="containerMain">
        <MainContainer />
      </div>
    );
  }
}

// this makes this file available to other files
export default App;
