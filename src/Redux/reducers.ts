import { User } from "../types/types";

export interface RootState {
  users: User[];
}

interface LoadUsersAction {
  type: string;
  payload: User[];
}

type Action = LoadUsersAction; // Add other action types here when they are available

const initialState: RootState = {
  users: [],
};

const rootReducer = (
  state: RootState = initialState,
  action: Action
): RootState => {
  switch (action.type) {
    case "LOAD_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
