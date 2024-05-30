import React from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "@/components/SearchBar";

export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});
