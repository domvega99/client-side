import jwt from 'jsonwebtoken';


export const logout = () => {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
  if (typeof window !== 'undefined') {
    window.location.href = '/auth/login';
  }

};

export const isAuthenticated = () => {
  // Check if the user is authenticated by verifying the token
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken = jwt.decode(token);

      if (decodedToken) {
        return true;
      }
    }
  }

  return false;
};
