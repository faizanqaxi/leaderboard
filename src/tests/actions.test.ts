import { loadUsers } from "../Redux/actions";
import UsersData from "../data/leaderboard.json";
import { User } from "../types/types";

describe("actions", () => {
  it("should create an action to load users", () => {
    const users: User[] = Object.values(UsersData);
    const expectedAction = {
      type: "LOAD_USERS",
      payload: users,
    };
    expect(loadUsers()).toEqual(expectedAction);
  });
});
