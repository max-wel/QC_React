import reducer from './passwordResetReducer';
import * as types from '../../types/passwordResetTypes';

describe('Password reset reducer test', () => {
  const initialState = reducer(undefined, {});

  it('returns initial state', () => {
    const result = reducer(initialState, {});
    expect(result).toEqual(initialState);
  });

  it('returns state on password reset success', () => {
    const action = { type: types.PASSWORD_RESET_SUCCESS, payload: 'msg' };
    const result = reducer(initialState, action);
    expect(result).toEqual({
      ...initialState,
      loading: false,
      error: '',
      message: 'msg'
    });
  });

  it('returns state on password reset failure', () => {
    const action = { type: types.PASSWORD_RESET_ERROR, payload: 'error' };
    const result = reducer(initialState, action);
    expect(result).toEqual({
      ...initialState,
      loading: false,
      error: 'error',
      message: ''
    });
  });
});
