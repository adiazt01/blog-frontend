import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { api } from "../api/axios";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = async (username, password) => {
    const response = await api.post("/admin/login", {
      username,
      password,
    });
    if (response.status === 200) {
      setAuthenticated(true);
    }
  };

  const logout = async () => {
    await api.post("/admin/login");
    delete api.defaults.headers.common["Authorization"];
    setAuthenticated(false);
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};