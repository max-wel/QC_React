import { combineReducers } from 'redux';
import authReducer from './authReducer/authReducer';
import passwordResetReducer from './passwordResetReducer/passwordResetReducer';

const reducer = combineReducers({
  auth: authReducer,
  passwordReset: passwordResetReducer
});

export default reducer;
