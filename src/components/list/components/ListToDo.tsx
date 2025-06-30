import { useSelector } from "react-redux";

import { getTask } from "../../../redux/tasks/selectors";
import { statusFilterSelector } from "../../../redux/filter/selectors";

import { getFilteredTasks } from "../utility/getFilteredTask";

import { ToDo } from "./ToDo";

export const ListToDo = () => {
  const tasks = useSelector(getTask);

  const statusFilter = useSelector(statusFilterSelector);

  const filteredTask = getFilteredTasks({ tasks, statusFilter });

  return (
    <ul>
      {filteredTask.map(({ id, text, completed }) => (
        <ToDo key={id} text={text} completed={completed} id={id} />
      ))}
    </ul>
  );
};
