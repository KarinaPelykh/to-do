import { useSelector } from "react-redux";
import { getTask } from "../redux/tasks/selectors";

export const TaskCounter = () => {
  const taskSelector = useSelector(getTask);

  const count = taskSelector.reduce(
    (
      acc: { active: number; completed: number },
      task: { id: number; text: string; completed: boolean }
    ) => {
      if (task.completed) {
        acc.completed += 1;
      }
      if (!task.completed) {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p>Active task:{count.active}</p>
      <p>Completed task:{count.completed}</p>
    </div>
  );
};
