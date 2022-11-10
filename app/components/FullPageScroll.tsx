import { AnimatePresence, motion } from "framer-motion";
import { useMemo, isValidElement, cloneElement } from "react";
import { cond, pipe } from "ramda";
import { isNegative, isPositive } from "ramda-adjunct";
import { deepForEach } from "react-children-utilities";
import { assert } from "@sindresorhus/is";
import debounce from "~/utils/debounce";
import useCounter from "~/hooks/useCounter";
import type { MotionProps, Variants } from "framer-motion";
import type {
  ComponentPropsWithoutRef,
  PointerEvent,
  WheelEvent,
  ElementType,
  ReactNode,
} from "react";
import type { PolymorphicComponentProps } from "~/utils/types";
import { getWheelDirection } from "~/utils/dom";

const variants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delayChildren: 0.8,
      // staggerChildren: 0.5,
    },
  },
  exit: { opacity: 0, y: -30, transition: { duration: 0.5 } },
};

type PageProps = MotionProps &
  ComponentPropsWithoutRef<"div"> & {
    show?: boolean;
  };
export function Page({ show, ...props }: PageProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          layout
          className="h-full"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          {...props}
        />
      )}
    </AnimatePresence>
  );
}

export function Pages<E extends ElementType>(
  props: PolymorphicComponentProps<E, {}>
) {
  const children: ReturnType<typeof Page>[] = [];
  deepForEach(props.children, (child: ReactNode) => {
    if (isValidElement(child) && child.type === Page) children.push(child);
  });

  const [page, setPage] = useCounter(0, children.length - 1);

  const onWheel = useMemo(
    () =>
      debounce.byLeadFrame(
        pipe(
          getWheelDirection,
          cond([
            [isPositive, setPage.inc],
            [isNegative, setPage.dec],
          ])
        )
      ),
    [setPage]
  );

  const onPointer = useMemo(() => {
    let start = 0;

    function onPointerDown(event: PointerEvent) {
      start = event.pageY;
    }

    function onPointerUp(event: PointerEvent) {
      const delta = -Math.sign(event.pageY - start);

      cond([
        [isPositive, setPage.inc],
        [isNegative, setPage.dec],
      ])(delta);
    }

    return { onPointerUp, onPointerDown };
  }, [setPage]);

  const handler = {
    onWheel,
    ...onPointer,
  };
  const Component = props.as ?? "div";

  return (
    <Component {...props} {...handler}>
      {children.map((child, index) =>
        cloneElement(child, {
          ...child.props,
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
