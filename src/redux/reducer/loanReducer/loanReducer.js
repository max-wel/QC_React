import * as types from '../../types/loanTypes';

const initialState = {
  loading: false,
  loans: [],
  error: ''
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_LOANS_LOADING:
      return {
        ...state,
        loading: true
      };
    case types.GET_LOANS_SUCCESS:
      return {
        ...state,
        loading: false,
        loans: payload
      };
    case types.GET_LOANS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default reducer;
