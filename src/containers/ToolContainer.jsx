import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserParameters from './UserParameters.jsx';
import UserSmpteDisplay from '../components/UserSmpteDisplay.jsx';
import MeasuresDisplay from '../components/MeasuresDisplay.jsx';
import { paramsOnBlur } from '../actions/actions.js';

const mapStateToProps = (state) => ({
  markers: state.markers.markers,
});

const mapDispatchToProps = (dispatch) => ({
  updateParam: (name, value) => {
    dispatch(paramsOnBlur(name, value))
  },
});

class ToolContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="toolContainer">
        <UserParameters updateParam={this.props.updateParam} />
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
        {MeasuresDisplay(this.props)}
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

export default connect(mapStateToProps, mapDispatchToProps)(ToolContainer);
