import clsx from "clsx";
import { range } from "ramda";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { flex } from "~/styles/common";
import type { ReactNode } from "react";

type MarqueeProps = {
  className?: string;
  children?: ReactNode;
};
function Marquee(props: MarqueeProps) {
  return (
    <motion.div
      animate={{
        x: ["25%", "-25%"],
      }}
      transition={{
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
      }}
      className={clsx(flex.nowrap, props.className)}
    >
      {range(0, 40).map((i) => (
        <Fragment key={i}>{props.children}</Fragment>
      ))}
    </motion.div>
  );
}

export default Marquee;
