import jwtDecode from 'jwt-decode';
import React from 'react';
import { Redirect } from 'react-router-dom';
import * as types from '../../types/authTypes';
import http from '../../../utils/httpService';

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

export const login = (userData, { history, location }) => async dispatch => {
  try {
    // dispatch loading
    dispatch(loading());
    const response = await http.post('/auth/signin', userData);
    const { data } = response.data;
    const { token, ...user } = data;
    // set token in localstorage
    localStorage.setItem('token', token);
    dispatch(authSuccess(user));
    const { state } = location || {};
    const path = state ? state.from.pathname : '/dashboard';
    window.location = path;
  } catch (error) {
    const { data } = error.response || {};
    const { error: authError } = data || {};
    dispatch(authFailure(authError));
  }
};

export const register = userData => async dispatch => {
  try {
    // dispatch loading
    dispatch(loading());
    const response = await http.post('/auth/signup', userData);
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

export const clearErrors = () => {
  return {
    type: types.CLEAR_ERRORS
  };
};

export const setCurrentUser = () => dispatch => {
  const token = localStorage.getItem('token');
  const user = jwtDecode(token);
  dispatch(authSuccess(user));
};
