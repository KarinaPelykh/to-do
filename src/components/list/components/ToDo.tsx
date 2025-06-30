import { useAppDispatch } from "../../../hook/hook";
import { deleteTodo, toggleCompletedTodo } from "../../../redux/tasks/action";
import { Button } from "../../ui/Button";
type ToDoProps = {
  text: string;
  completed: boolean;
  id: number;
};

export const ToDo = ({ text, completed, id: taskID }: ToDoProps) => {
  const dispatch = useAppDispatch();
  return (
    <li className=" flex border-2 border-amber-200 rounded-lg p-4 justify-between mt-5">
      <div className="flex  gap-10">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleCompletedTodo({ taskID }))}
        />
        <p>{text}</p>
      </div>
      <Button type="button" onClick={() => dispatch(deleteTodo({ taskID }))}>
        Delete
      </Button>
    </li>
  );
};
