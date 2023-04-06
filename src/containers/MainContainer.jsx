import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToolContainer from './ToolContainer.jsx';
import HeaderContainer from './HeaderContainer.jsx';

// import from child components

// mapStateToProps
const mapStateToProps = (state) => ({
  // ### state
});

class MainContainer extends Component {
  // ### maybe delete? If it's not used?
  constructor(props) {
    super(props);
    this.state = {};
  }

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

export default connect(mapStateToProps, null)(MainContainer);
