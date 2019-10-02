import * as types from '../../types/authTypes';

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: {},
  error: ''
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.AUTH_LOADING:
      return {
        ...state,
        loading: true
      };
    case types.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: '',
        user: { ...state.user, ...payload }
      };
    case types.AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: payload
      };
    case types.CLEAR_ERRORS:
      return {
        ...state,
        error: ''
      };
    default:
      return state;
  }
};

export default reducer;
