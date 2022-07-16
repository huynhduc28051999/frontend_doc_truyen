import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';

const rootReducers = combineReducers({
  authReducer,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
