import * as types from '../../types/loanTypes';
import http from '../../../utils/httpService';

const loading = () => {
  return {
    type: types.GET_LOANS_LOADING
  };
};
const getLoansSuccess = loans => {
  return {
    type: types.GET_LOANS_SUCCESS,
    payload: loans
  };
};
const getLoansFailure = error => {
  return {
    type: types.GET_LOANS_FAILURE,
    payload: error
  };
};

// eslint-disable-next-line import/prefer-default-export
export const getClientLoans = () => async dispatch => {
  try {
    dispatch(loading());
    const { data } = await http.get('/user/loans');
    const { data: loans } = data;
    dispatch(getLoansSuccess(loans));
  } catch (error) {
    // if 401 error logout and be redirected to login in the caller component
    dispatch(getLoansFailure('Something wrong occured'));
  }
};
