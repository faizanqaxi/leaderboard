import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import UserListItem from "./UserListItem";

export default function UserList({
  users,
  searchedUser,
}: {
  users: any;
  searchedUser: any;
}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.uid}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <UserListItem item={item} searchedUser={searchedUser} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  listContainer: {
    paddingVertical: 20,
  },
});
