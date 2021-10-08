import React, { createContext } from "react";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");

    return !!token;
  };

  const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
  };
  const setToken = (token) => {
    localStorage.setItem("token", token);
  };

  const logout = ()=> {
      localStorage.removeItem('token')
  }

  return (
    <Provider value={{ getToken, setToken, logout, isAuthenticated }}>
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
