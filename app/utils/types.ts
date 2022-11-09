import type { ComponentProps, ElementType } from "react";

export type ElementProps<E extends ElementType = ElementType, P = {}> = Omit<
  ComponentProps<E>,
  keyof P
> &
  P;

export type As<E extends ElementType = ElementType> = {
  as?: E;
};

export type PolymorphicComponentProps<
  E extends ElementType,
  P extends {}
> = As<E> & ElementProps<E, P>;
