import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './HeaderContainer.jsx';
import ToolContainer from './ToolContainer.jsx';

// import from child components

// mapStateToProps

class MainContainer extends Component {
  render() {
    return (
      <div className="mainContainer">
        {/* ### HeaderContainer */}
        {/* <HeaderContainer /> */}
        <h1>Cue Marker Tempo Calculator</h1>
        <ToolContainer />
        {/* ### GuideContainer */}

      </div>
    );
  }
}

export default MainContainer;
