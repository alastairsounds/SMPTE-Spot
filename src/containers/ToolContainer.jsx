import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserParametersContainer from './UserParametersContainer.jsx';
import UserSmpteDisplay from '../components/UserSmpteDisplay.jsx';
import MeasuresDisplay from '../components/MeasuresDisplay.jsx';

class ToolContainer extends Component {
  render() {
    return (
      <div className="toolContainer">
        <UserParametersContainer />
        {/* ### TEMPORARY */}
        <div className="emptyDiv"></div>
        {UserSmpteDisplay('UserSmpteDisplay arg')}
        {/* ### TEMPORARY */}
        <div className="emptyDiv"></div>
        {/* call Measures */}
        {/* {MeasuresDisplay} */}
        {MeasuresDisplay('MeasuresDisplay arg')}
        {/* ### TEMPORARY */}
        <div className="emptyDiv"></div>
        {/* ##STRETCHGOAL */}
        {/* <input type="checkbox" id="excludeTempos" name="excludeTempos" value="excludeTempos" />
        <label htmlFor="excludeTempos">Exclude tempos within 0.5 BPM</label> */}
        <div>
          <button>
            <span>Calculate</span>
          </button>
        </div>
        {/* ### IMPLEMENT SAVE FUNCTIONALITY */}
        <div>
          <button>
            <span>Save to Database</span>
          </button>
        </div>
      </div>
    );
  }
}

export default ToolContainer;
