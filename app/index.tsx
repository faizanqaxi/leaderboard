import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import SearchScreen from "@/components/SearchScreen";
import { Provider } from "react-redux";
import store from "../Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <SearchScreen />
      </SafeAreaView>
    </Provider>
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
