import { useSelector } from "react-redux";
import { Button } from "../ui/Button";
import { filterSelector } from "../../redux/filter/selectors";
import { statusFilter } from "../../redux/filter/constants";

export const StatusFilter = () => {
  const filter = useSelector(filterSelector);
  console.log(filter);

  return (
    <div className="flex gap-4 mt-5">
      <Button type="button" selected={filter === statusFilter.all}>
        All
      </Button>
      <Button type="button" selected={filter === statusFilter.active}>
        Active
      </Button>
      <Button type="button" selected={filter === statusFilter.completed}>
        Complete
      </Button>
    </div>
  );
};
