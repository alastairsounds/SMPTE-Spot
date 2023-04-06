import React, { Component } from 'react';

const UserParameters = (props) => {
  const paramsOnInput = (event) => {
    const value = event.target.value;
    const valid = event.target.validity.valid;
    if (!valid) {
      event.target.value = value.slice(0, value.length - 1);
    }
  };

  const paramsOnBlur = (event) => {
    // const { name, value } = event.target;
    const name = event.target.name;
    let value;
    if (event.target.value === '') {
      value = Number(document.getElementById(`input${name.charAt(0).toUpperCase() + name.slice(1)}`).placeholder);
    } else if (name === 'timeSig') {
      value = event.target.value;
    } else {
      value = Number(event.target.value);
    }
    props.updateParam(name, value);
  };

  return (
    <div className="userParameters">
      <div className="userParametersDiv">
        <h2>Tempo Range</h2>
        <input
          id="inputTempoMin"
          type="text"
          placeholder="100"
          name="tempoMin"
          maxLength="6"
          pattern="^\d{1,3}(\.\d{0,2})?$"
          onInput={paramsOnInput}
          onBlur={(event) => paramsOnBlur(event)}
        />
        <span>-</span>
        <input
          id="inputTempoMax"
          type="text"
          placeholder="140"
          name="tempoMax"
          maxLength="6"
          pattern="^\d{1,3}(\.\d{0,2})?$"
          onInput={paramsOnInput}
          onBlur={(event) => paramsOnBlur(event)}
        />
        <select
          id="inputTempoStep"
          name="tempoStep"
          defaultValue="0.1"
          onBlur={(event) => paramsOnBlur(event)}
        >
          <option value="0.01">0.01</option>
          <option value="0.05">0.05</option>
          <option value="0.1">0.1</option>
          <option value="0.2">0.2</option>
          <option value="0.5">0.5</option>
          <option value="1">1</option>
        </select>
        <span className="userParametersDivLast">testing interval (BPM)</span>
      </div>
      <div className="userParametersDiv">
        <select
          id="inputFps"
          name="fps"
          defaultValue="30"
          onBlur={(event) => paramsOnBlur(event)}
        >
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="60">60</option>
        </select>
        <span className="userParametersDivLast">FPS</span>
      </div>
      <select
        id="inputTimeSig"
        name="timeSig"
        defaultValue="4/4"
        onBlur={(event) => paramsOnBlur(event)}
      >
        <option value="2/4">2/4</option>
        <option value="3/4">3/4</option>
        <option value="4/4">4/4</option>
        <option value="5/4">5/4</option>
        <option value="6/4">6/4</option>
      </select>
      <span className="userParametersDivLast">time signature</span>
    </div>
  );
};

export default UserParameters;
