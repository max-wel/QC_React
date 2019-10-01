import * as types from '../types/authTypes';
import http from '../../utils/httpService';

const loading = () => {
  return {
    type: types.AUTH_LOADING
  };
};
const authSuccess = user => {
  return {
    type: types.AUTH_SUCCESS,
    payload: user
  };
};
const authFailure = error => {
  return {
    type: types.AUTH_FAILURE,
    payload: error
  };
};

// eslint-disable-next-line import/prefer-default-export
export const login = userData => async dispatch => {
  try {
    // dispatch loading
    dispatch(loading());
    const response = await http.post('/auth/signin', userData);
    const { data } = response.data;
    const { token, ...user } = data;
    // set token in localstorage
    localStorage.setItem('token', token);
    dispatch(authSuccess(user));
  } catch (error) {
    const { data } = error.response || {};
    const { error: authError } = data || {};
    dispatch(authFailure(authError));
  }
};
