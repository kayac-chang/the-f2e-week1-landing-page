import { AnimatePresence, motion } from "framer-motion";
import { useMemo, isValidElement, cloneElement } from "react";
import { cond, pipe, when } from "ramda";
import { isNegative, isPositive } from "ramda-adjunct";
import debounce from "~/utils/debounce";
import useCounter from "~/hooks/useCounter";
import type { MotionProps, Variants } from "framer-motion";
import type {
  ComponentPropsWithoutRef,
  PointerEvent,
  ElementType,
} from "react";
import type { PolymorphicComponentProps } from "~/utils/types";
import {
  getScrollableElement,
  getWheelDirection,
  isReachBottom,
  isReachTop,
  isWheelOverScroll,
} from "~/utils/dom";
import { merge } from "~/utils/animation";
import { deepFilter } from "~/utils/children";

const variants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      delayChildren: 0.8,
    },
  },
  exit: {
    opacity: [1, 0],
    transition: { duration: 0.2 },
  },
};

type PageProps = MotionProps &
  ComponentPropsWithoutRef<"div"> & {
    show?: boolean;
  };
export function Page({ show, ...props }: PageProps) {
  return (
    <AnimatePresence mode="popLayout">
      {show && (
        <motion.div
          {...props}
          layout
          className="h-full overflow-scroll"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={merge(variants, props.variants)}
        />
      )}
    </AnimatePresence>
  );
}

export function Pages<E extends ElementType>(
  props: PolymorphicComponentProps<E, {}>
) {
  const children = deepFilter(
    (child) => isValidElement(child) && child.type === Page,
    props.children
  ) as ReturnType<typeof Page>[];

  const [page, setPage] = useCounter(0, children.length - 1);

  const onWheel = useMemo(
    () =>
      debounce.byLeadFrame(
        when(
          isWheelOverScroll,
          pipe(
            getWheelDirection,
            cond([
              [isPositive, setPage.inc],
              [isNegative, setPage.dec],
            ])
          )
        )
      ),
    [setPage]
  );

  const onPointer = useMemo(() => {
    let start = 0;

    function onPointerDown(event: PointerEvent<HTMLElement>) {
      if (event.pageY) start = event.pageY;
    }

    function onPointerUp(event: PointerEvent<HTMLElement>) {
      const target = getScrollableElement(event.currentTarget);
      if (!target) return;

      const delta = -Math.sign(event.pageY - start);
      if (isPositive(delta) && isReachBottom(target)) return setPage.inc();
      if (isNegative(delta) && isReachTop(target)) return setPage.dec();
    }

    return {
      onPointerDownCapture: onPointerDown,
      onPointerUpCapture: onPointerUp,
    };
  }, [setPage]);

  const handler = {
    onWheel,
    ...onPointer,
  };
  const Component = props.as ?? "div";

  return (
    <Component {...props}>
      {children.map((child, index) =>
        cloneElement(child, {
          ...child.props,
          ...handler,
          key: index,
          show: page === index,
        })
      )}
    </Component>
  );
}
export default {
  Pages,
  Page,
};
