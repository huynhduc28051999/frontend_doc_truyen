import { put, call, takeEvery } from 'redux-saga/effects';
import Api from 'shared/config/api';
import { URL_COMMENTS, URL_CREATE_COMMENT } from 'shared/constant/endpoints';
import { Action, ResponseGenerator } from 'types/action';
import { commentConstant, REQUEST, SUCCESS, FAILURE } from '../constants';
import { toast } from 'react-toastify';

function* getComments(action: Action) {
  const { params } = action.payload || {};
  try {
    const getStoryApi = Api.get(URL_COMMENTS, { params });
    const response: ResponseGenerator = yield call(() => getStoryApi);
    if (response?.data?.data) {
      yield put({
        type: SUCCESS(commentConstant.GET_COMMENTS),
        payload: {
          response: response.data?.data
        },
      });
    }
  } catch (error) {
    toast.error('Lỗi lấy thông tin comment');
    yield put({
      type: FAILURE(commentConstant.GET_COMMENTS),
    });
  }
}

function* createComment(action: Action) {
  const { params } = action.payload || {};
  try {
    const createCommentApi = Api.post(URL_CREATE_COMMENT, params);
    const response: ResponseGenerator = yield call(() => createCommentApi);
    if (response?.data?.data) {
      yield put({
        type: SUCCESS(commentConstant.CREATE_COMMENT),
        payload: {
          response: response?.data?.data
        },
      });
    }
  } catch (error) {
  toast.error('Thêm bình luận thất bại')
    yield put({
      type: FAILURE(commentConstant.CREATE_COMMENT),
      error,
    });
  }
}

function* commentSaga() {
  yield takeEvery(REQUEST(commentConstant.GET_COMMENTS), getComments);
  yield takeEvery(REQUEST(commentConstant.CREATE_COMMENT), createComment);
}

export default commentSaga;
