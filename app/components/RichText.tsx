import clsx from "clsx";
import type { ComponentProps, CSSProperties } from "react";

type GlitchTextProps = ComponentProps<"div"> & {
  offset: number;
};
export function GlitchText({ className, children, offset }: GlitchTextProps) {
  return (
    <span className={className}>
      <span className="relative">
        <span
          aria-hidden
          className="absolute -left-full translate-x-0 text-secondary-1"
          style={
            {
              "--tw-translate-x": -offset + "px",
              "--tw-translate-y": -offset + "px",
            } as CSSProperties
          }
        >
          {children}
        </span>
        <span
          aria-hidden
          className="absolute -left-full translate-x-0  text-primary-1"
          style={
            {
              "--tw-translate-x": offset + "px",
              "--tw-translate-y": offset + "px",
            } as CSSProperties
          }
        >
          {children}
        </span>

        <span
          style={
            {
              "--stacks": 3,
            } as CSSProperties
          }
          data-glitch
        >
          <span aria-hidden data-glitch-3>
            {children}
          </span>
          <span aria-hidden data-glitch-2>
            {children}
          </span>
          <span data-glitch-1>{children}</span>
        </span>
      </span>
    </span>
  );
}

type NeonTextProps = ComponentProps<"div">;
export function NeonText({ className, children }: NeonTextProps) {
  return (
    <span
      className={clsx(
        className,
        "gradient-decoration text-clip bg-gradient-to-b text-neutral-5"
      )}
    >
      {children}
    </span>
  );
}
