import { createStore, combineReducers } from 'redux';

import quiz from './quiz/reducer';

export default createStore(combineReducers({
  quiz
}));
