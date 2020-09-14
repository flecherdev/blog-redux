import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// redux
import { createStore  } from 'redux';
import { Provider } from 'react-redux'; 
import reducers from './reducers';

// create store to app
const store = createStore(
  reducers, // all reducers
  {}, // initial state
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

