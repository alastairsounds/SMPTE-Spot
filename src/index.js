// the starting point of the application

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store.js';
import styles from './styles.scss';

// this loads the App component into the DOM element with the id of 'root'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
