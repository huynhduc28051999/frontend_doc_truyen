import { Action } from 'types/action';
import { authConstants } from '../constants/auth';
import { FAILURE, REQUEST, SUCCESS } from '../constants';

const initialState = {
  isLoading: false,
  isError: false,
  error: {},
  type: '',
  user: {},
};

const reducer = (state = initialState, action: Action) => {
  const { payload, error } = action;
  switch (action.type) {
    case REQUEST(authConstants.LOGIN):
      return {
        ...state,
        isLoading: true,
        type: action.type,
        messageError: '',
      };
    case SUCCESS(authConstants.LOGIN):
      return {
        ...state,
        isLoading: false,
        user: payload?.response,
      };
    case FAILURE(authConstants.LOGIN):
      return {
        ...state,
        isLoading: false,
        isError: true,
        user: {},
        error,
      };
    case REQUEST(authConstants.REGISTER):
      return {
        ...state,
        isLoading: true,
        messageError: '',
      };
    case SUCCESS(authConstants.REGISTER):
      return {
        ...state,
        isLoading: false,
      };
    case FAILURE(authConstants.REGISTER):
      return {
        ...state,
        isLoading: false,
        isError: true,
        error,
      };
    default:
      return state;
  }
};

export default reducer;
