import clsx from "clsx";
import { path } from "ramda";
import type { ComponentProps, CSSProperties } from "react";
import { config } from "~/styles/common";

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
              "--color-1": path(["white"])(config.theme?.colors),
              "--color-2": path(["secondary", "1"])(config.theme?.colors),
              "--color-3": path(["primary", "1"])(config.theme?.colors),
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
