import { Action } from 'types/action';
import { detailStory } from '../constants';
import { FAILURE, REQUEST, SUCCESS } from '../constants';

const initialState = {
  isLoading: false,
  isLoadingOther: false,
  isError: false,
  story: {},
  otherStories: []
};

const reducer = (state = initialState, action: Action) => {
  const { payload, error } = action;
  switch (action.type) {
    case REQUEST(detailStory.GET_DEATIL_STORY):
      return {
        ...state,
        isLoading: true,
        isError: false,
        story: {}
      };
    case SUCCESS(detailStory.GET_DEATIL_STORY):
      return {
        ...state,
        isLoading: false,
        isError: false,
        story: payload?.response
      };
    case FAILURE(detailStory.GET_DEATIL_STORY):
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case REQUEST(detailStory.OTHER_STORIES):
      return {
        ...state,
        isLoadingOther: true,
        isError: false,
        otherStories: []
      };
    case SUCCESS(detailStory.OTHER_STORIES):
      return {
        ...state,
        isLoadingOther: false,
        isError: false,
        otherStories: payload?.response
      };
    case FAILURE(detailStory.OTHER_STORIES):
      return {
        ...state,
        isLoadingOther: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default reducer;
