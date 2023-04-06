import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColSmpte from './ColSmpte.jsx';

const UserSmpteDisplay = (props) => {
  const colMarkers = [];
  const colSmpte = [];
  for (let i = 0; i < props.markers.length; i++) {
    colMarkers.push(<span key={i}>Marker {i + 1}</span>);
    colSmpte.push(<ColSmpte key={i} smpte={props.markers[i]} />);
  }

  return (
    <div>
      <div className="UserSmpteDisplay">
        {/* row 1 */}
        <span></span>
        {colMarkers}
        {/* row 2 */}
        <div></div>
        {colSmpte}
      </div>
    </div>
  );
};

export default UserSmpteDisplay;
