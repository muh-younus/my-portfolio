import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element, allowedRoles, userRole }) {
  return allowedRoles.includes(userRole) ? element : <Navigate to="/" />;
}

export default ProtectedRoute;