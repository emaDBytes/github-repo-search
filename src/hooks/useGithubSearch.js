import { useState, useCallback } from "react";
import { searchRepositories } from "../api/github";

/**
 * Custom hook to search GitHub repositories
 * @returns {Object} Search state and functions
 */
export const useGithubSearch = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchRepos = useCallback(async (keyword) => {
    if (!keyword || !keyword.trim()) {
      setRepositories([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const results = await searchRepositories(keyword);
      setRepositories(results);
    } catch (err) {
      setError(err.message || "An error occurred while searching");
      setRepositories([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    repositories,
    loading,
    error,
    searchRepos,
  };
};
