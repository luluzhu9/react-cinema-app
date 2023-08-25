import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducers from './reducers'; // don't need to specify index.js because it's index.js

const initialState = {};
const middleware = [thunk];

export const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)) // array destructing for all middlewares
);

export default store;
