import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import * as types from '../../types/authTypes';
import { login, register } from './authActions';
import http from '../../../utils/httpService';

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe('Auth actions test', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install(http.instance);
  });
  afterEach(() => {
    moxios.uninstall(http.instance);
  });

  it('should dispatch AUTH_SUCCESS on successful login', () => {
    const response = {
      data: {
        token: '',
        email: 'some@gmail.com'
      }
    };
    const expectedActions = [
      { type: types.AUTH_LOADING },
      { type: types.AUTH_SUCCESS, payload: { email: response.data.email } }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response });
    });
    return store.dispatch(login()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch AUTH_FAILURE on failed login', () => {
    const response = {
      error: 'error'
    };
    const expectedActions = [
      { type: types.AUTH_LOADING },
      { type: types.AUTH_FAILURE, payload: response.error }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 400, response });
    });
    return store.dispatch(login()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch AUTH_SUCCESS on successful registration', () => {
    const response = {
      data: {
        token: '',
        email: 'some@gmail.com'
      }
    };
    const expectedActions = [
      { type: types.AUTH_LOADING },
      { type: types.AUTH_SUCCESS, payload: { email: response.data.email } }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response });
    });
    return store.dispatch(register()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch AUTH_FAILURE on failed login', () => {
    const response = {
      error: 'error'
    };
    const expectedActions = [
      { type: types.AUTH_LOADING },
      { type: types.AUTH_FAILURE, payload: response.error }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 400, response });
    });
    return store.dispatch(register()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
