const initialState = {
  task: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
  filter: {
    status: "All",
  },
};

export const rootReducer = (state = initialState) => {
  console.log(state);
  return state;
  //   switch (action.type) {
  //     case "task/ADD_TODO": {
  //       return { ...state, task: [...state.task, action.payload] };
  //     }
  //     case "task/DELETE_TODO": {
  //       return {
  //         ...state,
  //         task: state.task.filter(({ id }) => id !== action.payload),
  //       };
  //     }
  //   }
};
