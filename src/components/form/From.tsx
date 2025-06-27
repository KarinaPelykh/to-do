import type { FormEvent } from "react";

import { Button } from "../ui/Button";
import { addTodo } from "../../redux/tasks/action";
import { useAppDispatch } from "../../hook/hook";

export const Form = () => {
  const dispatch = useAppDispatch();

  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    dispatch(
      addTodo({ text: form.input.value, completed: false, id: Date.now() })
    );
    form.reset();
  };

  return (
    <form
      onSubmit={handelSubmit}
      className="border-2 border-amber-200 rounded-lg p-4 mt-5 flex gap-4 justify-between"
    >
      <input
        type="text"
        name="input"
        placeholder="Enter your text"
        className="w-full outline-0 text-xl"
      />
      <Button type="submit">Add to do</Button>
    </form>
  );
};
