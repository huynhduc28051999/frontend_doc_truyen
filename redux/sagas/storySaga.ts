import { put, call, takeEvery } from 'redux-saga/effects';
import Api from 'shared/config/api';
import { URL_OWN_STORIES, URL_STORY } from 'shared/constant/endpoints';
import { Action, ResponseGenerator } from 'types/action';
import { StoryConstant, REQUEST, SUCCESS, FAILURE } from '../constants';
import { toast } from 'react-toastify';
import Router from 'next/router';

function* createStory(action: Action) {
  const { params } = action.payload || {};
  try {
    const createStoryApi = Api.post(URL_STORY, params);
    const response: ResponseGenerator = yield call(() => createStoryApi);
    if (response?.data?.data) {
      toast.success('Thêm truyện thành công')
      yield put({
        type: SUCCESS(StoryConstant.CREATE_STORY),
        payload: {},
      });
      Router.push('/admin/sang-tac')
    }
  } catch (error) {
  toast.error('Thêm truyện thất bại')
    yield put({
      type: FAILURE(StoryConstant.CREATE_STORY),
      error,
    });
  }
}

function* getOwnStories(action: Action) {
  try {
    const getOwnStoriesApi = Api.get(URL_OWN_STORIES);
    const response: ResponseGenerator = yield call(() => getOwnStoriesApi);
    if (response?.data?.data) {
      yield put({
        type: SUCCESS(StoryConstant.GET_OWN_STORIES),
        payload: {
          response: response?.data?.data
        },
      });
    }
  } catch (error) {
  toast.error('Lối khi lấy danh sách truyện')
    yield put({
      type: FAILURE(StoryConstant.GET_OWN_STORIES),
      error,
    });
  }
}


function* storySaga() {
  yield takeEvery(REQUEST(StoryConstant.CREATE_STORY), createStory);
  yield takeEvery(REQUEST(StoryConstant.GET_OWN_STORIES), getOwnStories);
}

export default storySaga;
