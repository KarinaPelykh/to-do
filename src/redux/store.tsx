import { createStore } from "redux";

const initialState = {
  task: [],
  filter: {
    status: "All",
  },
};

const rootReducer = (state = initialState) => {
  return state;
};

export const store = createStore(rootReducer);
