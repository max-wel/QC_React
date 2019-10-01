import reducer from './authReducer';
import * as types from '../../types/authTypes';

describe('AuthReducer Test', () => {
  const initialState = reducer(undefined, {});

  it('returns initial state', () => {
    const result = reducer(initialState, {});
    expect(result).toEqual(initialState);
  });

  it('returns state on auth loading', () => {
    const action = { type: types.AUTH_LOADING };
    const result = reducer(initialState, action);
    expect(result).toEqual({ ...initialState, loading: true });
  });

  it('returns state on auth success', () => {
    const action = { type: types.AUTH_SUCCESS, payload: {} };
    const result = reducer(initialState, action);
    expect(result).toEqual({
      ...initialState,
      loading: false,
      isAuthenticated: true,
      error: '',
      user: action.payload
    });
  });

  it('returns state on auth failure', () => {
    const action = { type: types.AUTH_FAILURE, payload: 'error' };
    const result = reducer(initialState, action);
    expect(result).toEqual({
      ...initialState,
      loading: false,
      isAuthenticated: false,
      error: action.payload
    });
  });
});
