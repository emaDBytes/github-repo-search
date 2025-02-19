import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import typography from "../styles/typography";

const RepositoryItem = ({ item }) => (
  <View style={styles.repoItem}>
    <Text style={styles.repoName}>{item.full_name}</Text>
    <Text style={styles.repoDescription}>{item.description}</Text>
    <View style={styles.stats}>
      <Text style={styles.stat}>⭐ {item.stargazers_count}</Text>
      <Text style={styles.stat}>🍴 {item.forks_count}</Text>
    </View>
  </View>
);

const EmptyList = () => (
  <Text style={styles.emptyMessage}>
    No repositories to display. Search for something!
  </Text>
);

const RepositoryList = ({ repositories, loading, error }) => {
  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color={colors.primary}
        style={styles.loader}
      />
    );
  }

  if (error) {
    return <Text style={styles.errorMessage}>{error}</Text>;
  }

  return (
    <FlatList
      style={styles.list}
      data={repositories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={EmptyList}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
    paddingHorizontal: spacing.md,
  },
  repoItem: {
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: 8,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  repoName: {
    ...typography.title,
    marginBottom: spacing.xs,
  },
  repoDescription: {
    ...typography.body,
  },
  stats: {
    flexDirection: "row",
    marginTop: spacing.sm,
  },
  stat: {
    ...typography.caption,
    marginRight: spacing.md,
  },
  emptyMessage: {
    textAlign: "center",
    margin: spacing.lg,
    fontSize: 16,
    color: colors.text.light,
  },
  errorMessage: {
    textAlign: "center",
    margin: spacing.lg,
    fontSize: 16,
    color: colors.error,
  },
  loader: {
    marginVertical: spacing.lg,
  },
  separator: {
    height: spacing.md,
  },
});

export default RepositoryList;
