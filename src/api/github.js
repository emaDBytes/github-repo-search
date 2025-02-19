import { GITHUB_API_URL } from "../utils/env";

/**
 * Searches GitHub repositories by keyword
 * @param {string} keyword - Search term
 * @returns {Promise<Array>} Repository data
 */
export const searchRepositories = async (keyword) => {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/search/repositories?q=${encodeURIComponent(keyword)}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching repositories: ${response.status}`);
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Repository search failed:", error);
    throw error;
  }
};
