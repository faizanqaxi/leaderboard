import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function UserListItem({
  item,
  searchedUser,
}: {
  item: any;
  searchedUser: any;
}) {
  return (
    <View
      style={[
        styles.userContainer,
        item.uid === searchedUser?.uid && styles.highlight,
      ]}
    >
      <Text style={styles.userText}>
        {item.rank}. {item.name} - {item.bananas} bananas
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  userText: {
    fontSize: 16,
  },
  highlight: {
    backgroundColor: "#ffffcc",
  },
});
