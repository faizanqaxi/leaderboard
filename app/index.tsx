import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import SearchBar from "@/components/SearchBar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
    </SafeAreaView>
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
