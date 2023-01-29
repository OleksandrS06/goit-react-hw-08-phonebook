import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

function LoginRedirect(Component, navigateTo) {
  const ProtectedComponent = props => {
    const userData = useSelector(selectIsLoggedIn);
    return userData === false ? (
      <Component {...props} />
    ) : (
      <Navigate to={navigateTo} />
    );
  };

  return ProtectedComponent;
}

export default LoginRedirect;
