import type { Task } from "./selectors";

export const addTodo = ({ text, id, completed }: Task) => {
  return {
    type: "task/ADD_TODO",
    payload: {
      id,
      text,
      completed,
    },
  };
};

// const deleteTodo = {
//   type: "task/DELETE_TODO",
//   payload: {
//     id: "",
//   },
// };

// const toggleCompletedTodo = {
//   type: "task/TOGGLE_TODO",
//   payload: {
//     id: "",
//   },
// };

// const setStatusFilter = {
//   type: "task/SET_STATUS_FILTER",
//   payload: {
//     statusFilter: "",
//     id: "",
//   },
// };
