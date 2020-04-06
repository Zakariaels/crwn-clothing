import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';

import App from './App';

ReactDOM.render(
  // <React.StrictMode>
  //React Redux provides <Provider />, which makes the Redux store available to the rest of the app
  <Provider store = { store }>
      <BrowserRouter>
    <App />
      </BrowserRouter>
  </Provider>,

    
  // </React.StrictMode>,
  document.getElementById('root')
);
