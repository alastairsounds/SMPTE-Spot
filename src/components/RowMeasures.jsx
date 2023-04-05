import React from 'react';
import ColMeasures from './ColMeasures.jsx';

const RowMeasures = (props) => {
  let count = 0;
  for (let prop in props.marker) {
    if (prop.startsWith('mk')) {
      count++;
    }
  }

  let cols = [];
  for (let i = 0; i < count; i++) {
    cols.push(<ColMeasures key={i} marker={props.marker[`mk${i + 1}`]} number={i + 1} />);
  }

  return (
    <div className="rowMeasuresBox">
      <div>
        <label htmlFor="Tempo Fit">Tempo Fit: </label>
        <span>{props.marker.tempo}</span>
      </div>
      {/*  */}
      {cols}
    </div>
  );
};

export default RowMeasures;
