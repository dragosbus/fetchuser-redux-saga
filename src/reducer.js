import * as actionTypes from './actionTypes';

const initialState = {
  fetching: false,
  data: null,
  error: null
};

export const userReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.API_CALL_REQUEST:
      return {
        ...initialState,
        fetching: true,
      };
    case actionTypes.API_CALL_ERROR:
      return {
        ...initialState,
        error: 'Cannot get the user',
      };
    case actionTypes.API_CALL_SUCCESS:
      return {
        ...initialState,
        data: action.payload
      };
    default:
      return state;
  }
};