import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (prevState) => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
