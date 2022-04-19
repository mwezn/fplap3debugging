import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getResult } from './actions';
import App from './App'
import './styles/index.css';
import store from './store'
store.dispatch(getResult()) //We need this to dispatch all possible actions??

console.log(store,store.getState())



ReactDOM.render( 
<Provider store={store}>
  <App />
</Provider>,
document.getElementById("root"));