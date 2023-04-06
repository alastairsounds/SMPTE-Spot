import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserParametersContainer from './UserParametersContainer.jsx';
import UserSmpteDisplay from '../components/UserSmpteDisplay.jsx';
import MeasuresDisplay from '../components/MeasuresDisplay.jsx';

const mapStateToProps = (state) => ({
  markers: state.markers.markers,
});

class ToolContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="toolContainer">
        <UserParametersContainer />
        {/* ### TEMPORARY */}
        {/*  */}
        <div className="emptyDiv"></div>
        {/*  */}
        {/*  */}
        {UserSmpteDisplay(this.props)}
        {/* ### TEMPORARY */}
        {/*  */}
        <div className="emptyDiv"></div>
        {/*  */}
        {/*  */}
        {MeasuresDisplay('MeasuresDisplay arg')}
        {/* ### TEMPORARY */}
        {/*  */}
        <div className="emptyDiv"></div>
        {/*  */}
        {/*  */}
        {/* ##STRETCHGOAL */}
        {/* <input type="checkbox" id="excludeTempos" name="excludeTempos" value="excludeTempos" />
        <label htmlFor="excludeTempos">Exclude tempos within 0.5 BPM</label> */}
        <div>
          <button id="buttonCalculate">
            <span>Calculate</span>
          </button>
        </div>
        {/* ### IMPLEMENT SAVE FUNCTIONALITY */}
        <div>
          <button id="buttonSaveToDB">
            <span>Save to Database</span>
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ToolContainer);
