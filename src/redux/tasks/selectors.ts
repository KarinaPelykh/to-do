export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type State = {
  task: Task[];
};
export const getTask = (state: State) => state.task;
