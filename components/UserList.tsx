import React from "react";
import { StyleSheet, FlatList } from "react-native";
import UserListItem from "./UserListItem";

export default function UserList({
  users,
  searchedUser,
}: {
  users: any;
  searchedUser: any;
}) {
  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.uid}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <UserListItem item={item} searchedUser={searchedUser} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
