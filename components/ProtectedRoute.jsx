// components/ProtectedRoute.js
import { useEffect } from 'react';
import { isAuthenticated } from 'services/authService';

const ProtectedRoute = ({ children }) => {
  useEffect(() => {
    if (!isAuthenticated()) {
      // Redirect to the login page or show an error message
      window.location.href = '/auth/login';
    }
  }, []);

  if (isAuthenticated()) {
    return children;
  } else {
    return null;
  }
};

export default ProtectedRoute;
