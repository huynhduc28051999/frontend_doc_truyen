import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import storyReducer from './reducers/storyReducer';

const rootReducers = combineReducers({
  authReducer,
  storyReducer
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
