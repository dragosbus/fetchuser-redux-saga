import * as actionTypes from './actionTypes';

export const apiRequest = () => ({ type: actionTypes.API_CALL_REQUEST });
export const apiSuccess = data => ({
  type: actionTypes.API_CALL_SUCCESS,
  payload: data
});
export const apiError = () => ({ type: actionTypes.API_CALL_ERROR });