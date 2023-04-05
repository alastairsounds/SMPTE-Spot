import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserParametersContainer extends Component {
  render() {
    return (
      <div className="userParameters">
        <div className="userParametersDiv">
          <h2>Tempo Range</h2>
          <input type="text" placeholder="100" />
          <span>-</span>
          <input type="text" placeholder="140" />
          <select>
            <option value="0.01 BPM">0.01</option>
            <option value="0.05 BPM">0.05</option>
            <option value="0.1 BPM" defaultValue>
              0.1
            </option>
            <option value="0.2 BPM">0.2</option>
            <option value="0.5 BPM">0.5</option>
            <option value="1 BPM">1</option>
          </select>
          <span className="userParametersDivLast">BPM</span>
        </div>
        <div className="userParametersDiv">
          <select name="" id="">
            {/* <option value="23.976">23.976</option> */}
            <option value="24" defaultValue>
              24
            </option>
            <option value="25">25</option>
            {/* <option value="29.97d">29.97d</option> */}
            {/* <option value="29.97">29.97</option> */}
            {/* <option value="30d">30d</option> */}
            <option value="30">30</option>
            {/* <option value="50">50</option> */}
            {/* <option value="59.94d">59.94d</option> */}
            {/* <option value="59.94">59.94</option> */}
            {/* <option value="60d">60d</option> */}
            <option value="60">60</option>
          </select>
          <span className="userParametersDivLast">FPS</span>
          {/* insert checkbox with text "drop frame" */}

          {/* <label>
              <input type="checkbox" name="dropFrame"></input>
              drop frame
            </label> */}
        </div>
        <div className="userParametersDiv">
          <select name="" id="">
            {/* <option value="2/2">2/2</option> */}
            {/* <option value="3/2">3/2</option> */}
            {/* <option value="4/2">4/2</option> */}
            {/* <option value="   ">   </option> */}
            <option value="2/4">2/4</option>
            <option value="3/4">3/4</option>
            <option value="4/4" defaultValue>
              4/4
            </option>
            <option value="5/4">5/4</option>
            <option value="6/4">6/4</option>
            {/* <option value="   ">   </option> */}
            {/* <option value="3/8">3/8</option> */}
            {/* <option value="4/8">4/4</option> */}
            {/* <option value="5/8">5/8</option> */}
            {/* <option value="6/8">6/8</option> */}
            {/* <option value="7/8">7/8</option> */}
            {/* <option value="9/8">9/8</option> */}
            {/* <option value="12/8">12/8</option> */}
          </select>
          <span className="userParametersDivLast">time signature</span>
        </div>
      </div>
    );
  }
}

export default UserParametersContainer;
