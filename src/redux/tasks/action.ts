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

export const deleteTodo = ({ taskID }: { taskID: number }) => {
  return { type: "task/DELETE_TODO", payload: taskID };
};

export const toggleCompletedTodo = ({ taskID }: { taskID: number }) => {
  return { type: "task/TOGGLE_TODO", payload: taskID };
};
