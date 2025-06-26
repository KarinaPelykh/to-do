import type { FormEvent } from "react";
import { Button } from "../ui/Button";

export const Form = () => {
  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <form
      onSubmit={handelSubmit}
      className="border-2 border-amber-200 rounded-lg p-4 mt-5 flex gap-4 justify-between"
    >
      <input
        type="text"
        placeholder="Enter your text"
        className="w-full outline-0 text-xl"
      />
      <Button type="submit">Add to do</Button>
    </form>
  );
};
