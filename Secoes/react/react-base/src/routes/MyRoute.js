import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function MyRoute({ component: Component, isCLosed, ...rest }) {
  const isLoggedIn = false;

  if(isCLosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  return <Route {...rest} component={Component} />
}
