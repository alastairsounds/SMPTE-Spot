import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserParametersContainer from './UserParametersContainer.jsx';
import UserSmpteContainer from './UserSmpteContainer.jsx';

class ToolContainer extends Component {
  render() {
    return (
      <div className="toolContainer">
        <UserParametersContainer />
        {/* ### TEMPORARY */}
        <div className="emptyDiv"></div>
        <UserSmpteContainer />
        {/* ### TEMPORARY */}
        <div className="emptyDiv"></div>
      </div>
    );
  }
}

export default ToolContainer;
