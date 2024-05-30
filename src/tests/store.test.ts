// store.test.ts
import { createStore } from "redux";
import rootReducer from "../Redux/reducers";
import { User } from "../types/types";

describe("store", () => {
  it("should configure store with initial state", () => {
    const store = createStore(rootReducer);
    const expectedState = {
      users: [],
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("should handle dispatching actions", () => {
    const store = createStore(rootReducer);
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

    store.dispatch(action);

    const expectedState = {
      users,
    };

    expect(store.getState()).toEqual(expectedState);
  });
});
