import clsx from "clsx";
import type { ComponentProps, CSSProperties } from "react";

type GlitchTextProps = ComponentProps<"div"> & {
  offset: number;
};
export function GlitchText({ className, children, offset }: GlitchTextProps) {
  return (
    <span className={className}>
      <span
        aria-hidden
        className="absolute -translate-x-0 text-secondary-1"
        style={
          {
            "--tw-translate-x": -1 * offset + "px",
            "--tw-translate-y": -1 * offset + "px",
          } as CSSProperties
        }
      >
        {children}
      </span>
      <span
        aria-hidden
        className="absolute translate-x-0  text-primary-1"
        style={
          {
            "--tw-translate-x": offset + "px",
            "--tw-translate-y": offset + "px",
          } as CSSProperties
        }
      >
        {children}
      </span>
      <span className="relative">{children}</span>
    </span>
  );
}

type NeonTextProps = ComponentProps<"div">;
export function NeonText({ className, children }: NeonTextProps) {
  return (
    <span
      className={clsx(
        className,
        "text-clip bg-gradient-to-b gradient-decoration text-neutral-5"
      )}
    >
      {children}
    </span>
  );
}
