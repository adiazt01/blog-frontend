import { createContext, useEffect, useState } from "react";
import { apiAuth } from "../api/axios";
import { useNavigate,useLocation } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticated(true);
      apiAuth.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  const login = async (username, password) => {
    const response = await apiAuth.post("/login", {
      username,
      password,
    });

    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      apiAuth.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      setAuthenticated(true);
    }
  };

  const logout = async () => {
    await apiAuth.post("/logout");
    localStorage.removeItem('token');
    delete apiAuth.defaults.headers.common['Authorization'];
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>{children}</AuthContext.Provider>
  );
};
