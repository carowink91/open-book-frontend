import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import openBookReducer from './reducers/openBookReducer'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
// import thunk from 'redux-thunk';

const store = createStore(openBookReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));
