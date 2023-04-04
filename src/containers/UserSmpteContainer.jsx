import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserSmpteContainer extends Component {
  render() {
    return (
      <div className="UserSmpteContainer">
        <span>Marker 1</span>
        <span>Marker 2</span>
        <span>Marker 3</span>
        <span>Marker 4</span>
        <span>Marker 5</span>
        <span>Marker 6</span>
        <input type="text" placeholder="01:03:22:18" />
        <input type="text" placeholder="01:03:31:10" />
        <input type="text" placeholder="01:03:37:05" />
        <input type="text" placeholder="01:03:52:10" />
        <input type="text" placeholder="01:04:01:19" />
        <input type="text" placeholder="01:04:10:18" />
      </div>
    );
  }
}

export default UserSmpteContainer;
