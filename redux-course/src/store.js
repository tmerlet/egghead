import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import todoReducer from './reducers/todo';
import messageReducer from './reducers/messages';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  todo: todoReducer,
  message: messageReducer
})

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
