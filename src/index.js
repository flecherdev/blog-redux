import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// redux
import { applyMiddleware, createStore  } from 'redux';
import { Provider } from 'react-redux'; 
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
// create store to app
const store = createStore(
  reducers, // all reducers
  {}, // initial state
  applyMiddleware(reduxThunk) 
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

