import { Action } from 'types/action';
import { StoryConstant } from '../constants/storyConstant';
import { FAILURE, REQUEST, SUCCESS } from '../constants';

const initialState = {
  isLoading: false,
  isError: false,
  stories: []
};

const reducer = (state = initialState, action: Action) => {
  const { payload, error } = action;
  switch (action.type) {
    case REQUEST(StoryConstant.CREATE_STORY):
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case SUCCESS(StoryConstant.CREATE_STORY):
      return {
        ...state,
        isLoading: false,
        isError: false
      };
    case FAILURE(StoryConstant.CREATE_STORY):
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case REQUEST(StoryConstant.GET_OWN_STORIES):
      return {
        ...state,
        isLoading: true,
        isError: false,
        stories: []
      };
    case SUCCESS(StoryConstant.GET_OWN_STORIES):
      return {
        ...state,
        isLoading: false,
        isError: false,
        stories: payload?.response
      };
    case FAILURE(StoryConstant.GET_OWN_STORIES):
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default reducer;
