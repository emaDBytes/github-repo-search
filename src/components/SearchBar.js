import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import colors from "../styles/colors";
import spacing from "../styles/spacing";

const SearchBar = ({ keyword, onChangeKeyword, onSearch, loading }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter keyword..."
        placeholderTextColor="#999"
        value={keyword}
        onChangeText={onChangeKeyword}
        editable={!loading}
      />
      <Button
        title="FIND"
        onPress={onSearch}
        disabled={loading || !keyword.trim()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: spacing.md,
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 40,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    paddingHorizontal: 12,
    marginRight: spacing.sm,
    backgroundColor: colors.card,
  },
});

export default SearchBar;
