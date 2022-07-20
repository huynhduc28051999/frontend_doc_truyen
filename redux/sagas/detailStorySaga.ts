import { put, call, takeEvery } from 'redux-saga/effects';
import Api from 'shared/config/api';
import { URL_OTHER_STORIES, URL_STORY_DETAIL } from 'shared/constant/endpoints';
import { Action, ResponseGenerator } from 'types/action';
import { detailStory as detailStoryConstant, REQUEST, SUCCESS, FAILURE } from '../constants';
import { toast } from 'react-toastify';
import Router from 'next/router';

function* detailStory(action: Action) {
  const { params } = action.payload || {};
  try {
    const getStoryApi = Api.get(URL_STORY_DETAIL, { params });
    const response: ResponseGenerator = yield call(() => getStoryApi);
    if (response?.data?.data) {
      yield put({
        type: SUCCESS(detailStoryConstant.GET_DEATIL_STORY),
        payload: {
          response: response.data?.data
        },
      });
    }
  } catch (error) {
    toast.error('Lỗi lấy thông tin truyện');
    Router.push('/404')
    yield put({
      type: FAILURE(detailStoryConstant.GET_DEATIL_STORY),
    });
  }
}

function* otherStories(action: Action) {
  const { params } = action.payload || {};
  try {
    const getStoryApi = Api.get(URL_OTHER_STORIES, { params });
    const response: ResponseGenerator = yield call(() => getStoryApi);
    if (response?.data?.data) {
      yield put({
        type: SUCCESS(detailStoryConstant.OTHER_STORIES),
        payload: {
          response: response.data?.data
        },
      });
    }
  } catch (error) {
    toast.error('Lỗi lấy thông tin truyện');
    yield put({
      type: FAILURE(detailStoryConstant.OTHER_STORIES),
    });
  }
}

function* detailStorySaga() {
  yield takeEvery(REQUEST(detailStoryConstant.GET_DEATIL_STORY), detailStory);
  yield takeEvery(REQUEST(detailStoryConstant.OTHER_STORIES), otherStories);
}

export default detailStorySaga;
