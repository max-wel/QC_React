import * as types from '../../types/passwordResetTypes';

const initialState = {
  loading: false,
  message: '',
  error: ''
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PASSWORD_RESET_LOADING:
      return {
        ...state,
        loading: true
      };
    case types.PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
        error: ''
      };
    case types.PASSWORD_RESET_ERROR:
      return {
        ...state,
        loading: false,
        message: '',
        error: payload
      };
    default:
      return state;
  }
};

export default reducer;
