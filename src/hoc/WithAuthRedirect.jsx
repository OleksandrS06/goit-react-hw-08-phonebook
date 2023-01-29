import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

function WithAuthRedirect(Component, navigateTo) {
  const ProtectedComponent = props => {
    const userData = useSelector(selectIsLoggedIn);
    return userData === true ? (
      <Component {...props} />
    ) : (
      <Navigate to={navigateTo} />
    );
  };

  return ProtectedComponent;
}

export default WithAuthRedirect;
