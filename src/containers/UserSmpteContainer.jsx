import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserSmpteContainer extends Component {
  render() {
    return (
      <div className="UserSmpteContainer">
        {/* row 1 */}
        <span></span>
        <span>Marker 1</span>
        <span>Marker 2</span>
        <span>Marker 3</span>
        <span>Marker 4</span>
        <span>Marker 5</span>
        {/* row 2 */}
        <div></div>
        <div>
          <input type="text" placeholder="01:03:22:18" />
        </div>
        <div>
          <input type="text" placeholder="01:03:31:10" />
        </div>
        <div>
          <input type="text" placeholder="01:03:37:05" />
        </div>
        <div>
          <input type="text" placeholder="01:03:52:10" />
        </div>
        <div>
          <input type="text" placeholder="01:04:01:19" />
        </div>
      </div>
    );
  }
}

export default UserSmpteContainer;
