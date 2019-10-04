import * as types from '../../types/passwordResetTypes';
import http from '../../../utils/httpService';

const loading = () => {
  return {
    type: types.PASSWORD_RESET_LOADING
  };
};
const passwordResetSuccess = message => {
  return {
    type: types.PASSWORD_RESET_SUCCESS,
    payload: message
  };
};
const passwordResetFailure = error => {
  return {
    type: types.PASSWORD_RESET_ERROR,
    payload: error
  };
};

export const forgotPassword = userData => async dispatch => {
  try {
    dispatch(loading());
    await http.post('/auth/forgot_password', userData);
    const message = 'Password reset mail sent';
    dispatch(passwordResetSuccess(message));
  } catch (error) {
    const errorMessage = 'This email does not exist';
    dispatch(passwordResetFailure(errorMessage));
  }
};

export const resetPassword = (userData, resetToken) => async dispatch => {
  try {
    dispatch(loading());
    await http.post(`/auth/reset_password/${resetToken}`, userData);
    const message = 'Password reset successful';
    dispatch(passwordResetSuccess(message));
  } catch (error) {
    const { data } = error.response || {};
    const { error: errorMessage } = data || {};
    console.log('**ERROR**', data);
    dispatch(passwordResetFailure(errorMessage));
  }
};
