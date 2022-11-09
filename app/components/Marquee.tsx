import clsx from "clsx";
import { range } from "ramda";
import { Fragment, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { flex } from "~/styles/common";
import { merge } from "~/utils/animation";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  animate: {
    x: ["0%", "-75%"],
    transition: {
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

type MarqueeProps = {
  className?: string;
  children?: ReactNode;
  count?: number;
  duration?: number;
  pause?: boolean;
};
function Marquee(props: MarqueeProps) {
  const count = props.count ?? 10;
  const duration = props.duration ?? 20;

  const animation = useAnimationControls();
  useEffect(() => {
    if (props.pause) {
      return animation.stop();
    }
    animation.start("animate");
  }, [animation, props.pause]);

  return (
    <motion.div
      className={clsx(flex.nowrap, "w-max", props.className)}
      variants={merge(variants, { animate: { transition: { duration } } })}
      animate={animation}
    >
      {range(0, count).map((i) => (
        <Fragment key={i}>{props.children}</Fragment>
      ))}
    </motion.div>
  );
}

export default Marquee;
