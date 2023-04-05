import React from 'react';

const ColMeasures = (props) => {
  console.log(props.number)
  return (
    <div className="colMeasuresBox">
      <label htmlFor={'Beat Target: ' + props.number}>Beat Target: </label>
      <span>{props.marker.beatTarget}</span>
      <br />
      <label htmlFor="Marker 1">Variance: </label>
      <span>{props.marker.resultSec}</span>
    </div>
  );
};

export default ColMeasures;
