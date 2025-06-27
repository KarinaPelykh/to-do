import { statusFilters } from "../../../redux/filter/constants";
import type { Task } from "../../../redux/tasks/selectors";

type GetFilteredTasksProps = {
  tasks: Task[];
  statusFilter: string;
};

export const getFilteredTasks = ({
  tasks,
  statusFilter,
}: GetFilteredTasksProps) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};
