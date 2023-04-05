import React from 'react';

const Measures = (props) => {
  return (
    <div className="measuresBox">
      <div>
        <label htmlFor="Tempo Fit">Tempo Fit: </label>
        <span>{props.measure.tempo}</span>
      </div>
      {/*  */}
      <div>
        <label htmlFor="Marker 1">Beat Target: </label>
        <span>{props.measure.mk1.beatTarget}</span>
        <br />
        <label htmlFor="Marker 1">Variance: </label>
        <span>{props.measure.mk1.resultSec}</span>
      </div>
      {/*  */}
      <div>
        <label htmlFor="Marker 2">Beat Target: </label>
        <span>{props.measure.mk2.beatTarget}</span>
        <br />
        <label htmlFor="Marker 2">Variance: </label>
        <span>{props.measure.mk2.resultSec}</span>
      </div>
      {/*  */}
      <div>
        <label htmlFor="Marker 3">Beat Target: </label>
        <span>{props.measure.mk3.beatTarget}</span>
        <br />
        <label htmlFor="Marker 3">Variance: </label>
        <span>{props.measure.mk3.resultSec}</span>
      </div>
      {/*  */}
      <div>
        <label htmlFor="Marker 4">Beat Target: </label>
        <span>{props.measure.mk4.beatTarget}</span>
        <br />
        <label htmlFor="Marker 4">Variance: </label>
        <span>{props.measure.mk4.resultSec}</span>
      </div>
      {/*  */}
      <div>
        <label htmlFor="Marker 5">Beat Target: </label>
        <span>{props.measure.mk5.beatTarget}</span>
        <br />
        <label htmlFor="Marker 5">Variance: </label>
        <span>{props.measure.mk5.resultSec}</span>
      </div>
    </div>
  );
};

export default Measures;
