import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import * as types from '../../types/passwordResetTypes';
import { forgotPassword, resetPassword } from './passwordResetActions';
import http from '../../../utils/httpService';

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe('Password reset actions test', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install(http.instance);
  });
  afterEach(() => {
    moxios.uninstall(http.instance);
  });

  it('should dispatch PASSWORD_RESET_SUCCESS on sucessful forgot password', () => {
    const response = {
      data: {}
    };
    const expectedActions = [
      { type: types.PASSWORD_RESET_LOADING },
      {
        type: types.PASSWORD_RESET_SUCCESS,
        payload: 'Password reset mail sent'
      }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response });
    });
    return store.dispatch(forgotPassword()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch PASSWORD_RESET_ERROR on failed failed forgot password', () => {
    const response = {
      data: {}
    };
    const expectedActions = [
      { type: types.PASSWORD_RESET_LOADING },
      {
        type: types.PASSWORD_RESET_ERROR,
        payload: 'This email does not exist'
      }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 404, response });
    });
    return store.dispatch(forgotPassword()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch PASSWORD_RESET_SUCCESS on sucessful reset password', () => {
    const response = {
      data: {}
    };
    const expectedActions = [
      { type: types.PASSWORD_RESET_LOADING },
      {
        type: types.PASSWORD_RESET_SUCCESS,
        payload: 'Password reset successful'
      }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response });
    });
    return store.dispatch(resetPassword()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch PASSWORD_RESET_ERROR on failed failed reset password', () => {
    const response = {
      error: 'error'
    };
    const expectedActions = [
      { type: types.PASSWORD_RESET_LOADING },
      {
        type: types.PASSWORD_RESET_ERROR,
        payload: response.error
      }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 404, response });
    });
    return store.dispatch(resetPassword()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
