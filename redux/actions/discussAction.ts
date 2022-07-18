import { Payload } from 'types/action';
import { REQUEST, discussConstant } from '../constants';

export const createDiscuss = (payload: Payload) => ({
  type: REQUEST(discussConstant.CREATE_DISUCSS),
  payload,
});

export const getOwnDiscuss = () => ({
  type: REQUEST(discussConstant.GET_OWN_DISCUSS)
});

export const getdiscussId = (payload: Payload) => ({
  type: REQUEST(discussConstant.GET_DISCUSS_ID),
  payload,
});