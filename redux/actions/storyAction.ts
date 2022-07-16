import { Payload } from 'types/action';
import { REQUEST, StoryConstant } from '../constants';

export const createStory = (payload: Payload) => ({
  type: REQUEST(StoryConstant.CREATE_STORY),
  payload,
});

export const getOwnStories = () => ({
  type: REQUEST(StoryConstant.GET_OWN_STORIES)
});
