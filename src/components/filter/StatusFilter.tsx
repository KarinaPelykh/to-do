import { useSelector } from "react-redux";

import { Button } from "../ui/Button";

import { statusFilterSelector } from "../../redux/filter/selectors";
import { statusFilters } from "../../redux/filter/constants";

export const StatusFilter = () => {
  const filter = useSelector(statusFilterSelector);

  return (
    <div className="flex gap-4 mt-5">
      <Button type="button" selected={filter === statusFilters.all}>
        All
      </Button>
      <Button type="button" selected={filter === statusFilters.active}>
        Active
      </Button>
      <Button type="button" selected={filter === statusFilters.completed}>
        Complete
      </Button>
    </div>
  );
};
