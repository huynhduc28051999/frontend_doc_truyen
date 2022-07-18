import { Action } from 'types/action';
import { discussConstant } from '../constants/discussConstant';
import { FAILURE, REQUEST, SUCCESS } from '../constants';

const initialState = {
  isLoading: false,
  isError: false,
  discuss: []
};

const reducer = (state = initialState, action: Action) => {
  const { payload, error } = action;
  switch (action.type) {
    case REQUEST(discussConstant.CREATE_DISUCSS):
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case SUCCESS(discussConstant.CREATE_DISUCSS):
      return {
        ...state,
        isLoading: false,
        isError: false
      };
    case FAILURE(discussConstant.CREATE_DISUCSS):
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case REQUEST(discussConstant.GET_OWN_DISCUSS):
      return {
        ...state,
        isLoading: true,
        isError: false,
        discuss: []
      };
    case SUCCESS(discussConstant.GET_OWN_DISCUSS):
      return {
        ...state,
        isLoading: false,
        isError: false,
        discuss: payload?.response
      };
    case FAILURE(discussConstant.GET_OWN_DISCUSS):
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
