import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import manageUsers from './reducers/manageUsers'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// add imports and code

let store = createStore(manageUsers)

ReactDOM.render(
  // add imports and code
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
