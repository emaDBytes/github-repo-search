import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RepositoryList from "../components/RepositoryList";
import { useGithubSearch } from "../hooks/useGithubSearch";
import colors from "../styles/colors";

const HomeScreen = () => {
  const [keyword, setKeyword] = useState("");
  const { repositories, loading, error, searchRepos } = useGithubSearch();

  const handleSearch = () => {
    searchRepos(keyword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="GitHub Repository Search" />
      <SearchBar
        keyword={keyword}
        onChangeKeyword={setKeyword}
        onSearch={handleSearch}
        loading={loading}
      />
      <RepositoryList
        repositories={repositories}
        loading={loading}
        error={error}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default HomeScreen;
