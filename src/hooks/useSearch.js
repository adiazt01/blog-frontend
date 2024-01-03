import { useState, useEffect } from "react";
import { api } from "../api/axios";

export const useSearch = (searchTerm) => {
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      setLoading(true);
      if (searchTerm !== "") {
        const { data } = await api.get(`/posts/search/${searchTerm}`);
        setResults(data);
      } else {
        setResults([]);
      }
      setLoading(false);
    };

    const timeoutId = setTimeout(search, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  return { isLoading, results };
};
