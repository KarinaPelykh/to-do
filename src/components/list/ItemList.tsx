import { useSelector } from "react-redux";
import { Button } from "../ui/Button";
import { getTask } from "../../redux/tasks/selectors";
import { getFilteredTasks } from "./utility/getFilteredTask";

export const ItemList = () => {
  const tasks = useSelector(getTask);
  const filteredTask = getFilteredTasks(tasks);
  console.log(filteredTask);

  return (
    <div className=" flex border-2 border-amber-200 rounded-lg p-4 justify-between mt-5">
      <div className="flex  gap-10">
        <input type="checkbox" />
        <p>dvfsdgffdgdfgadfgadfgadfg</p>
      </div>
      <Button type="button"> Delete</Button>
    </div>
  );
};
