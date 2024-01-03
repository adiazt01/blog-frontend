import { createContext, useEffect, useState } from "react";
import { api } from "../api/axios";
import PropTypes from "prop-types";

export const PostContext = createContext();

const ITEMS_PER_PAGE = 5;

export const PostProvider = ({ children }) => {
  // pagination stuff
  const [posts, setPosts] = useState([]);
  const [lastPosts, setLastPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Get all blogs on first render
  useEffect(() => {
    getPosts(currentPage, ITEMS_PER_PAGE);
    getLastPosts();
    getTotalPosts();
  }, [currentPage]);

  // Get a single blog
  const getPost = async (id) => {
    try {
      const response = await api.get(`/posts/${id}`);
      return response.data.post;
    } catch (error) {
      console.log(error);
    }
  };

  // Get total number of blogs
  const getTotalPosts = async () => {
    try {
      const response = await api.get(`/posts/count`);
      setTotalPages(Math.ceil(response.data / ITEMS_PER_PAGE));
    } catch (error) {
      console.log(error);
    }
  };

  // Get all blogs with pagination handled by backend
  const getPosts = async (page, limit) => {
    try {
      const response = await api.get(`/posts?page=${page}&limit=${limit}`);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // get lasts five blogs
  const getLastPosts = async () => {
    try {
      const response = await api.get(`/posts/lasts`);
      setLastPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changePage = (page) => {
    setCurrentPage(page);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 100);
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        getPosts,
        getPost,
        changePage,
        totalPages,
        currentPage,
        lastPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

PostProvider.propTypes = {
  children: PropTypes.node.isRequired,
};