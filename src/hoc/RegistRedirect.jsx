import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsRegistered } from 'redux/auth/selectors';

function RegistrationRedirect(Component, navigateTo) {
  const ProtectedComponent = props => {
    const userData = useSelector(selectIsRegistered);
    return userData === false ? (
      <Component {...props} />
    ) : (
      <Navigate to={navigateTo} />
    );
  };

  return ProtectedComponent;
}

export default RegistrationRedirect;
