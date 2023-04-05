import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColSmpte from './ColSmpte.jsx';

// import calc from '../utils/calculator.js';

// const userCalc = calc;
// console.log(userCalc.params);

const tempState = [
  {
    marker: 1,
    smpte: '01:03:22:18',
  },
  {
    marker: 2,
    smpte: '01:03:31:10',
  },
  {
    marker: 3,
    smpte: '01:03:37:05',
  },
  {
    marker: 4,
    smpte: '01:03:52:10',
  },
  {
    marker: 5,
    smpte: '01:04:01:19',
  },
];

const UserSmpteDisplay = (props) => {
  const colMarkers = [];
  for (let i = 0; i < tempState.length; i++) {
    colMarkers.push(<span key={i}>Marker {tempState[i].marker}</span>);
  }

  const colSmpte = [];
  for (let i = 0; i < tempState.length; i++) {
    colSmpte.push(<ColSmpte key={i} smpte={tempState[i].smpte} />)
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

// class UserSmpteDisplay extends Component {
//   render() {
//     return (
//       <div>
//         <div className="UserSmpteDisplay">
//           {/* row 1 */}
//           <span></span>
//           <span>Marker 1</span>
//           <span>Marker 2</span>
//           <span>Marker 3</span>
//           <span>Marker 4</span>
//           <span>Marker 5</span>
//           {/* row 2 */}
//           <div></div>
//           <div>
//             <input type="text" placeholder="01:03:22:18" />
//           </div>
//           <div>
//             <input type="text" placeholder="01:03:31:10" />
//           </div>
//           <div>
//             <input type="text" placeholder="01:03:37:05" />
//           </div>
//           <div>
//             <input type="text" placeholder="01:03:52:10" />
//           </div>
//           <div>
//             <input type="text" placeholder="01:04:01:19" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default UserSmpteDisplay;
