import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import UserList from "./UserList";

import UsersData from "../data/leaderboard.json"; // path to user data
import SearchBar from "./SearchBar";

export default function SearchScreen() {
  const [users, setUsers] = useState(Object.values(UsersData));
  const [searchResults, setSearchResults] = useState<any>([]);
  const [searchedUser, setSearchedUser] = useState<any>();

  // Function to handle search logic
  const handleSearch = (searchInput: string) => {
    // Finding the user with the same name as the search input
    const user = users.find(
      (u) => u.name.toLowerCase() === searchInput.toLowerCase()
    );

    // If no such user exist, show alert and return
    if (!user) {
      Alert.alert(
        "This user name does not exist! Please specify an existing user name!"
      );
      setSearchResults([]);
      setSearchedUser(null);
      return;
    }

    // If a user is found
    setSearchedUser(user);

    // Sorting the users by the number of bananas and get the top 10 users
    const sortedUsers = [...users].sort((a, b) => b.bananas - a.bananas);
    const top10Users = sortedUsers.slice(0, 10).map((user, index) => ({
      ...user,
      rank: index + 1,
    }));

    // Adding the searched user to the top 10 users
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
      <SearchBar handleSearch={handleSearch} />
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
});
