// reducers.test.ts
import rootReducer, { RootState } from "../Redux/reducers";
import { User } from "../types/types";

describe("rootReducer", () => {
  const initialState: RootState = {
    users: [],
  };

  it("should return the initial state", () => {
    expect(rootReducer(undefined, { type: "UNKNOWN_ACTION" } as any)).toEqual(
      initialState
    );
  });

  it("should handle LOAD_USERS", () => {
    const users: User[] = [
      {
        bananas: 10,
        lastDayPlayed: "2023-05-01",
        longestStreak: 5,
        name: "User 1",
        stars: 3,
        subscribed: true,
        uid: "uid1",
      },
      {
        bananas: 15,
        lastDayPlayed: "2023-05-02",
        longestStreak: 10,
        name: "User 2",
        stars: 5,
        subscribed: false,
        uid: "uid2",
      },
    ];
    const action = {
      type: "LOAD_USERS",
      payload: users,
    };
    const expectedState = {
      users,
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });
});
