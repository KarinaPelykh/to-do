import { statusFilter } from "../../../redux/filter/constants";

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

type GetFilteredTasksProps = {
  tasks: Task[];
};

type StatusFilter = (typeof statusFilter)[keyof typeof statusFilter];

export const getFilteredTasks = ({
  tasks,
  filter,
}: GetFilteredTasksProps & { filter: StatusFilter }) => {
  switch (filter) {
    case statusFilter.active:
      return tasks.filter((task) => !task.completed);
    case statusFilter.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};
