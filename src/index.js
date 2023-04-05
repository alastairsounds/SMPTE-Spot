// the starting point of the application

import React from 'react';
import { createRoot } from 'react-dom/client';
// the Provider component is from the react-redux library and allows us to provide our redux store to our react application

import App from './App';
import styles from './styles.scss';

// this loads the App component into the DOM element with the id of 'root'
createRoot(document.getElementById('root')).render(<App />);
