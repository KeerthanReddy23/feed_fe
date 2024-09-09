import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default AuthRoute;