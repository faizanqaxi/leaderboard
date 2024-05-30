import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import UserList from "./UserList";

import UsersData from "../data/leaderboard.json"; // path to user data

export default function SearchBar() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState(Object.values(UsersData));
  const [searchResults, setSearchResults] = useState<any>([]);
  const [searchedUser, setSearchedUser] = useState<any>();

  const handleSearch = () => {
    const user = users.find(
      (u) => u.name.toLowerCase() === username.toLowerCase()
    );
    if (!user) {
      Alert.alert(
        "This user name does not exist! Please specify an existing user name!"
      );
      setSearchResults([]);
      setSearchedUser(null);
      return;
    }

    setSearchedUser(user);

    const sortedUsers = [...users].sort((a, b) => b.bananas - a.bananas);
    const top10Users = sortedUsers.slice(0, 10).map((user, index) => ({
      ...user,
      rank: index + 1,
    }));

    if (top10Users.some((u) => u.uid === user.uid)) {
      setSearchResults(top10Users);
    } else {
      const userRank = sortedUsers.findIndex((u) => u.uid === user.uid) + 1;
      top10Users[top10Users.length - 1] = { ...user, rank: userRank };
      setSearchResults(top10Users);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="search" size={20} color="gray" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      {/* If search button is pressed, then conditionally render the list of users */}
      {searchResults.length > 0 && (
        <UserList users={searchResults} searchedUser={searchedUser} />
      )}
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "80%",
    marginTop: 80,
  },
  iconContainer: {
    padding: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0,
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
