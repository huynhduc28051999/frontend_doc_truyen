import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import storyReducer from './reducers/storyReducer';
import discussReducer from './reducers/discussReducer';

const rootReducers = combineReducers({
  authReducer,
  storyReducer,
  discussReducer
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
