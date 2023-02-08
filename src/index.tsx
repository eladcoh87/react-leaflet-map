import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import restReducer from './store/restReducer';



const store = createStore(restReducer,composeWithDevTools())



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
    </Provider>
);

