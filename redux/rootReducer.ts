import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import storyReducer from './reducers/storyReducer';
import discussReducer from './reducers/discussReducer';
import homeReducer from './reducers/homeReducer';

const rootReducers = combineReducers({
  authReducer,
  storyReducer,
  discussReducer,
  homeReducer
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
