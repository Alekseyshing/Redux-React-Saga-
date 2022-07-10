import React from 'react';
import { createRoot  } from 'react-dom/client';
import {createStore, compose, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './redux/rootReducer';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {forbiddenWordsMiddleware} from './redux/middleware'
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware()
const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk, forbiddenWordsMiddleware, saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(sagaWatcher)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
