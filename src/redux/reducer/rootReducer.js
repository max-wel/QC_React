import { combineReducers } from 'redux';
import authReducer from './authReducer/authReducer';
import passwordResetReducer from './passwordResetReducer/passwordResetReducer';
import loanReducer from './loanReducer/loanReducer';

const reducer = combineReducers({
  auth: authReducer,
  passwordReset: passwordResetReducer,
  clientLoans: loanReducer
});

export default reducer;
