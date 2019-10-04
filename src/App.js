import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './container/Home/Home';
import Login from './container/Login/Login';
import Register from './container/Register/Register';
import ForgotPassword from './container/PasswordReset/ForgotPassword/ForgotPassword';
import ResetPassword from './container/PasswordReset/ResetPassword/ResetPassword';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/reset_password" component={ResetPassword} />
      <Route path="/forgot_password" component={ForgotPassword} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
