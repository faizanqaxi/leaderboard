import UsersData from "../data/leaderboard.json";

export const loadUsers = () => ({
  type: "LOAD_USERS",
  payload: Object.values(UsersData),
});
