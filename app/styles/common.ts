import clsx from "clsx";
import tailwindConfig from "tailwind.config";
import resolve from "tailwindcss/resolveConfig";

export const config = resolve(tailwindConfig);

export const flex = {
  col: "flex flex-col",
  col_center: "flex flex-col items-center",
  row_center: "flex flex-row items-center",
  nowrap: "flex flex-nowrap items-center [&>*]:whitespace-nowrap",
};
export const section = clsx(flex.col, "w-full min-h-screen overflow-hidden");

export const marquee = clsx("gap-6", flex.nowrap);
export const card = clsx(flex.col_center, "gap-4 rounded-3xl");
export const badge = "bg-secondary-1 w-max py-1 px-2 rounded-xl";
export const button = {
  outline: "rounded-[2rem] border",
  yellow: "rounded-[2rem] bg-yellow-1 text-neutral-6",
};

export const tab = clsx(
  "relative",
  "text-neutral-2",
  "hover:text-white",
  "hover:after:block",

  "after:hidden",
  "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2",
  "after:h-1.5 after:w-5 after:rounded-3xl",
  "after:bg-secondary-1 after:shadow",

  "shadow-secondary-1",
  "[&>*]:hover:text-shadow [&>*]:hover:shadow-white"
);
