import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import typography from "../styles/typography";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.header,
    padding: spacing.md,
    alignItems: "center",
  },
  title: {
    ...typography.header,
  },
});

export default Header;
