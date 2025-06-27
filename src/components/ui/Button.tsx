import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  children?: ReactNode;
  selected?: boolean;
};

export const Button = ({ type, children, selected }: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        selected && "bg-black border-2 border-amber-200 text-white",
        "border-0  w-fit rounded-3xl bg-amber-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
};
