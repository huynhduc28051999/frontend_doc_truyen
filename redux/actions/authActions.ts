import { Payload } from 'types/action';
import { REQUEST, authConstants } from '../constants';

export const loginUser = (payload: Payload) => ({
  type: REQUEST(authConstants.LOGIN),
  payload,
});

export const getCurrentUser = (payload: Payload) => ({
  type: REQUEST(authConstants.GET_ME),
  payload,
});

export const registerAction = (payload: Payload) => ({
  type: REQUEST(authConstants.REGISTER),
  payload,
});

export const logoutAction = () => ({
  type: REQUEST(authConstants.LOGOUT)
});
