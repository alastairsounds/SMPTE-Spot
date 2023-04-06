import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserParameters from './UserParameters.jsx';
import UserSmpteDisplay from '../components/UserSmpteDisplay.jsx';
import MeasuresDisplay from '../components/MeasuresDisplay.jsx';
import { paramsOnBlur, prepMarkers, calcFits } from '../actions/actions.js';

const mapStateToProps = (state) => ({
  markers: state.markers.markers,
  tempoFits: state.markers.tempoFits,
});

const mapDispatchToProps = (dispatch) => ({
  updateParam: (name, value) => {
    dispatch(paramsOnBlur(name, value));
  },
  prepMarkers: (array) => {
    dispatch(prepMarkers(array));
  },
  calcFits: () => {
    dispatch(calcFits());
  },
});

class ToolContainer extends Component {
  constructor(props) {
    super(props);
  }

  getMarkers() {
    let classArr = document.getElementsByClassName('colSmpteInput');
    const result = [];
    for (const [key, value] of Object.entries(classArr)) {
      if (value.value !== '') {
        result.push(value.value);
      }
    }
    return result;
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
        {MeasuresDisplay(this.props.tempoFits)}
        {/* ### TEMPORARY */}
        {/*  */}
        <div className="emptyDiv"></div>
        {/*  */}
        {/*  */}
        {/* ##STRETCHGOAL */}
        {/* <input type="checkbox" id="excludeTempos" name="excludeTempos" value="excludeTempos" />
        <label htmlFor="excludeTempos">Exclude tempos within 0.5 BPM</label> */}
        <div>
          <button
            id="buttonCalculate"
            onClick={() => {
              const newMarkers = this.getMarkers();
              this.props.prepMarkers(newMarkers);
              this.props.calcFits();
            }}
          >
            <span>Calculate</span>
          </button>
        </div>
        {/* ### IMPLEMENT SAVE FUNCTIONALITY */}
        <div>
          <button
            id="buttonSaveToDB"
            onClick={() => {
              console.log('Save clicked');
            }}
          >
            <span>Save to Database</span>
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolContainer);
