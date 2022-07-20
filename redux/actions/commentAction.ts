import { Payload } from 'types/action';
import { REQUEST, commentConstant } from '../constants';

export const getComments = (payload: Payload) => ({
  type: REQUEST(commentConstant.GET_COMMENTS),
  payload,
});

export const createComment = (payload: Payload) => ({
  type: REQUEST(commentConstant.CREATE_COMMENT),
  payload,
});
