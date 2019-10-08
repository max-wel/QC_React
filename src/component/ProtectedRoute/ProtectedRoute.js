import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({
  path,
  component: Component,
  render,
  isAuthenticated
}) => {
  return (
    <Route
      path={path}
      render={props => {
        if (!isAuthenticated)
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
