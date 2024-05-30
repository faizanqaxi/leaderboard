import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { User } from "@/types/types";

export default function UserListItem({
  item,
  searchedUser,
}: {
  item: User | null | undefined;
  searchedUser: User | null | undefined;
}) {
  return (
    <>
      {item ? (
        <View
          style={[
            styles.userContainer,
            item.uid === searchedUser?.uid && styles.highlight,
          ]}
        >
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userRank}>Rank: {item.rank}</Text>
          <Text style={styles.userBananas}>{item.bananas} bananas</Text>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    width: "100%",
    minWidth: "80%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    alignSelf: "center",
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  userRank: {
    fontSize: 14,
    fontWeight: "400",
    color: "#666",
  },
  userBananas: {
    fontSize: 14,
    fontWeight: "400",
    color: "#666",
  },
  highlight: {
    backgroundColor: "#e6f7ff",
    borderColor: "#007BFF",
    borderWidth: 1,
  },
});
