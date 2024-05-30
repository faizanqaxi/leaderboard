import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import UserList from "./UserList";
import SearchBar from "./SearchBar";

import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../Redux/actions";

export default function SearchScreen() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const [searchResults, setSearchResults] = useState<any>([]);
  const [searchedUser, setSearchedUser] = useState<any>();

  // Function to handle search logic
  const handleSearch = (searchInput: string) => {
    // Finding user based on search input
    const user = users.find(
      (u) => u.name.toLowerCase() === searchInput.toLowerCase()
    );

    // Alert if user does not exist
    if (!user) {
      Alert.alert(
        "This user name does not exist! Please specify an existing user name!"
      );
      setSearchResults([]);
      setSearchedUser(null);
      return;
    }

    // If user exists, set searched user
    setSearchedUser(user);

    // Sorting users based on bananas and getting top 10 users
    const sortedUsers = [...users].sort((a, b) => b.bananas - a.bananas);
    const top10Users = sortedUsers.slice(0, 10).map((user, index) => ({
      ...user,
      rank: index + 1,
    }));

    // Setting search results based on top 10 users and searched user
    if (top10Users.some((u) => u.uid === user.uid)) {
      setSearchResults(top10Users);
    } else {
      const userRank = sortedUsers.findIndex((u) => u.uid === user.uid) + 1;
      top10Users[top10Users.length - 1] = { ...user, rank: userRank };
      setSearchResults(top10Users);
    }
  };

  // Function to handle fuzzy search
  const handleFuzzySearch = (input: string) => {
    if (input === "") {
      setSearchResults([]);
      return;
    }

    // Sorting users based on bananas
    const sortedUsers = users.sort((a, b) => b.bananas - a.bananas);

    // Ranking users based on bananas
    const rankedUsers = sortedUsers.map((user, index) => ({
      ...user,
      rank: index + 1,
    }));

    // Filtering users based on search input
    const filteredUsers = rankedUsers.filter((u) =>
      u.name.toLowerCase().includes(input.trim().toLowerCase())
    );

    // Sorting filtered users based on their ranks
    const sortedFilteredUsers = filteredUsers.sort((a, b) => a.rank - b.rank);

    // Setting search results
    setSearchResults(sortedFilteredUsers);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        handleSearch={handleSearch}
        handleFuzzySearch={handleFuzzySearch}
      />
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
