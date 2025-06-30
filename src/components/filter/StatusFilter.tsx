import { useSelector } from "react-redux";

import { Button } from "../ui/Button";

import { statusFilterSelector } from "../../redux/filter/selectors";
import { statusFilters } from "../../redux/filter/constants";
import { useAppDispatch } from "../../hook/hook";
import { setStatusFilter } from "../../redux/filter/action";

export const StatusFilter = () => {
  const filter = useSelector(statusFilterSelector);

  const dispatch = useAppDispatch();
  console.log(filter);

  return (
    <div className="flex gap-4 mt-5">
      <Button
        type="button"
        selected={filter === statusFilters.all}
        onClick={() => dispatch(setStatusFilter({ status: statusFilters.all }))}
      >
        All
      </Button>
      <Button
        type="button"
        selected={filter === statusFilters.active}
        onClick={() =>
          dispatch(setStatusFilter({ status: statusFilters.active }))
        }
      >
        Active
      </Button>
      <Button
        type="button"
        selected={filter === statusFilters.completed}
        onClick={() =>
          dispatch(setStatusFilter({ status: statusFilters.completed }))
        }
      >
        Complete
      </Button>
    </div>
  );
};
