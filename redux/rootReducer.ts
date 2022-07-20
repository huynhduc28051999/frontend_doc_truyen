import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import storyReducer from './reducers/storyReducer';
import discussReducer from './reducers/discussReducer';
import homeReducer from './reducers/homeReducer';
import detailStoryReducer from './reducers/detailStoryReducer';
import commentReducer from './reducers/commentReducer';

const rootReducers = combineReducers({
  authReducer,
  storyReducer,
  discussReducer,
  homeReducer,
  detailStoryReducer,
  commentReducer
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
