import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
// import { createStore } from 'redux';
// import rootReducer from './reducers/rootReducer.js';
// import { Provider } from 'react-redux';

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<App />,
  document.getElementById('root')
);

// <Provider store={store}>
//   <App />
// </Provider>,
