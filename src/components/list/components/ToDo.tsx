import { Button } from "../../ui/Button";
type ToDoProps = {
  text: string;
  completed: boolean;
};

export const ToDo = ({ text, completed }: ToDoProps) => {
  return (
    <li className=" flex border-2 border-amber-200 rounded-lg p-4 justify-between mt-5">
      <div className="flex  gap-10">
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
      </div>
      <Button type="button"> Delete</Button>
    </li>
  );
};
