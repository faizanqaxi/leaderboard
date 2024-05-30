import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import UsersData from "../data/leaderboard.json"; // path to user data

export default function SearchBar() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState(UsersData);

  const handleSearch = () => {
    console.log("Search button clicked. Username:", username);
    // Add search logic here
  };

  return (
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
  );
}

const styles = StyleSheet.create({
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
