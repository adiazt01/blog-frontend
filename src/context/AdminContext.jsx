import { createContext } from "react";
import { api } from "../api/axios";
import PropTypes from "prop-types";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const createPost = async (data) => {
    try {
      const response = await api.post("/admin/posts", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (data, id) => {
    try {
      const response = await api.put(`/admin/posts/${id}`, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getPost = async (id) => {
    try {
      const response = await api.get(`/admin/posts/${id}`);
      return response.data.post;
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      const response = await api.delete(`/admin/posts/${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminContext.Provider
      value={{ createPost, updatePost, getPost, deletePost }}
    >
      {children}
    </AdminContext.Provider>
  );
};

AdminProvider.propTypes = {
  children: PropTypes.node.isRequired,
};