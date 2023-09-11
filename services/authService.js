// services/authService.js
import axios from 'axios';
import jwt from 'jsonwebtoken';

// export const login = async (username, password) => {
  

// };

export const logout = () => {
  
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = '/auth/login';

};

export const isAuthenticated = () => {
  // Check if the user is authenticated by verifying the token
  const token = localStorage.getItem('token');

  if (token) {
    const decodedToken = jwt.decode(token);

    if (decodedToken) {
      return true;
    }
  }

  return false;
};
