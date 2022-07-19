import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import authSaga from 'redux/sagas/authSaga';
import storySaga from 'redux/sagas/storySaga';
import discussSaga from './sagas/discussSaga';
import homeSaga from './sagas/homeSaga';

export const sagaMiddleware = createSagaMiddleware();

export default function* rootSaga() {
  yield all([authSaga(), storySaga(), discussSaga(), homeSaga()]);
}
