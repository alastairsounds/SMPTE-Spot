import React from 'react';
import Measures from './Measures.jsx';
// import calc from '../utils/calc.js';

// const userCalc = calc;

console.log('a')

const tempState = [
  {
    mae: 0.044,
    mk1: { beatTarget: 1, resultSec: '+0.000' },
    mk2: { beatTarget: 19, resultSec: '+0.033' },
    mk3: { beatTarget: 31, resultSec: '+0.077' },
    mk4: { beatTarget: 62, resultSec: '-0.025' },
    mk5: { beatTarget: 81, resultSec: '-0.039' },
    tempo: 123.2,
  },
  {
    mae: 0.044,
    mk1: { beatTarget: 1, resultSec: '+0.000' },
    mk2: { beatTarget: 21, resultSec: '+0.026' },
    mk3: { beatTarget: 34, resultSec: '-0.080' },
    mk4: { beatTarget: 69, resultSec: '+0.048' },
    mk5: { beatTarget: 90, resultSec: '-0.022' },
    tempo: 137,
  },
  {
    mae: 0.045,
    mk1: { beatTarget: 1, resultSec: '+0.000' },
    mk2: { beatTarget: 21, resultSec: '+0.033' },
    mk3: { beatTarget: 34, resultSec: '-0.070' },
    mk4: { beatTarget: 69, resultSec: '+0.070' },
    mk5: { beatTarget: 90, resultSec: '+0.007' },
    tempo: 136.9,
  },
];

const MeasuresDisplay = (props) => {
  const measures = [];
  for (let i = 0; i < tempState.length; i++) {
    measures.push(<Measures key={i} measure={tempState[i]} />);
  }
  return (
    <div className="measuresDisplay">
      {measures}
    </div>
  )
};

export default MeasuresDisplay;
