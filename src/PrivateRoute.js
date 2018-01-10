import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component, path, user }) => (
  <Route
    path={path}
    render={props => (
      true ? (
        React.createElement(component, props, user)
      ) : (
        <Redirect to={{
          pathname: '/signin',
          state: { from: props.location }
        }}/>
      )
    )}
  />
);

export default PrivateRoute;
