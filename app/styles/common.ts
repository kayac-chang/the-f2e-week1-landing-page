import clsx from "clsx";

export const theme = {
  main: "bg-neutral-5 text-white",
};

export const flex = {
  col: "flex flex-col",
  col_center: "flex flex-col items-center",
  row_center: "flex flex-row items-center",
  center: "flex justify-center items-center",
  nowrap: "flex flex-nowrap items-center [&>*]:whitespace-nowrap",
};
export const section = clsx(flex.col, "w-full h-full overflow-x-hidden");

export const card = clsx(flex.col_center, "gap-4 rounded-3xl");
export const badge = "bg-secondary-1 w-max py-1 px-2 rounded-xl";
export const button = {
  outline: "rounded-[2rem] border",
  yellow: "rounded-[2rem] bg-yellow-1 shadow-yellow-1 text-neutral-6",
};

export const tab = clsx(
  "relative",
  "text-neutral-2",
  "hover:text-white",
  "hover:after:opacity-100",

  "after:opacity-0",
  "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2",
  "after:h-1.5 after:w-5 after:rounded-3xl",
  "after:bg-secondary-1 after:shadow-lg",
  "after:transition-opacity after:duration-200",

  "shadow-secondary-1",
  "[&>*]:hover:text-shadow-md [&>*]:hover:shadow-white",
  "transition-all duration-200"
);
