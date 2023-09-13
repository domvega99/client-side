'use client'
// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userData, setUser] = useState([]);
  const [token, setToken] = useState(null);

  const login = (newToken) => {
    
  };

  const logout = () => {
    
  };

  // Decode the token and set user on initial load
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token) {
          const decodedToken = jwt.decode(token);  
          setUser(decodedToken.user)
          console.log(decodedToken.user)
        }
      }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
