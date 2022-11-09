import clsx from "clsx";
import { last, map, multiply, range } from "ramda";
import { motion } from "framer-motion";
import { GlitchText, NeonText } from "~/components/RichText";
import SVG from "~/components/SVG";
import Marquee from "~/components/Marquee";
import { button, section } from "~/styles/common";
import { transform } from "~/utils/css";
import { useAnimationSeq } from "~/utils/animation";
import type { AnimationControls } from "framer-motion";
import type { ComponentProps } from "react";
import type { Vec2 } from "~/utils/css";

type DecorationProps = ComponentProps<"div">;

function DecorationPacMan(props: DecorationProps) {
  const spacing = 0.75;

  const positions = range(0, 18)
    .map((index) => {
      // 0 .. 3
      if (index < 4) {
        const unit = index;
        return [unit, 0];
      }

      // 4 .. 13
      if (index < 14) {
        const offset = 3;
        const unit = index - offset;
        return [offset, unit];
      }

      // 14 .. 21
      const offset = 10;
      const unit = index - offset;
      return [unit, offset];
    })
    .map(map(multiply(spacing))) as Vec2[];

  const last_positions = (() => {
    const [x, y] = last(positions)!;

    return [x + spacing, y] as Vec2;
  })();

  return (
    <div {...props}>
      <div className="relative s-10">
        {/* purple ball */}
        <div
          className="absolute"
          style={{
            ...transform([-1 * spacing, 0]),
          }}
        >
          <img
            src={require("~/assets/image/decoration/ball-purple.png")}
            role="presentation"
            alt="presentation"
            className="w-4 -translate-x-[50%] -translate-y-[40%]"
          />
        </div>

        {/* white ball */}
        {positions.map((position) => (
          <img
            key={JSON.stringify(position)}
            src={require("~/assets/image/decoration/ball-white.png")}
            role="presentation"
            alt="presentation"
            className="absolute w-[0.2rem] lg:w-1"
            style={{
              ...transform(position),
            }}
          />
        ))}

        {/* pac-man */}
        <div
          className="absolute"
          style={{
            ...transform(last_positions),
          }}
        >
          <img
            src={require("~/assets/image/decoration/player.png")}
            role="presentation"
            alt="presentation"
            className="w-6 -translate-x-[30%] -translate-y-[45%] -scale-x-100"
          />
        </div>
      </div>
    </div>
  );
}

function DecorationArrow(props: DecorationProps) {
  const spacing = 0.75;

  const positions = range(0, 22)
    .map((index) => {
      // 0 .. 3
      if (index < 4) {
        const unit = index;
        return [unit, 0];
      }

      // 4 .. 13
      if (index < 14) {
        const offset = 3;
        const unit = index - offset;
        return [offset, unit];
      }

      // 14 .. 21
      const offset = 10;
      const unit = index - offset;
      return [unit, offset];
    })
    .map(map(multiply(spacing))) as Vec2[];

  const last_positions = (() => {
    const [x, y] = last(positions)!;

    return [x + spacing, y] as Vec2;
  })();

  return (
    <div {...props}>
      <div className="relative s-10">
        {/* white ball */}
        {positions.map((position) => (
          <img
            key={JSON.stringify(position)}
            src={require("~/assets/image/decoration/ball-white.png")}
            role="presentation"
            alt="presentation"
            className="absolute w-1"
            style={transform(position)}
          />
        ))}

        {/* arrow */}
        <div className="absolute" style={transform(last_positions)}>
          <img
            src={require("~/assets/image/decoration/triangle.png")}
            role="presentation"
            alt="presentation"
            className="-translate-x-[30%] -translate-y-[45%]"
          />
        </div>
      </div>
    </div>
  );
}

function fadein(animation: AnimationControls) {
  return animation.start({
    y: [50, 0],
    opacity: [0, 1],
    transition: {
      ease: "circOut",
      duration: 1,
    },
  });
}

function floating(animation: AnimationControls) {
  return animation.start({
    y: [0, 25],
    transition: {
      type: "spring",
      mass: 1,
      damping: 120,
      stiffness: 280,
      duration: 6,
      repeatType: "mirror",
      repeat: Infinity,
    },
  });
}

function Banner(props: ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={clsx(
        props.className,
        section,
        "pt-40",
        "sm:pt-60",
        "items-center text-center"
      )}
    >
      <div className="relative">
        {/* code */}
        <div
          className={clsx(
            "absolute",
            "top-[-8rem]",
            "md:top-[2rem] md:left-[-11rem]",
            "lg:left-[-10rem]",
            "xl:left-[-14rem]",
            "2xl:left-[-10rem] 2xl:top-[5rem]"
          )}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={useAnimationSeq(fadein, floating)}
          >
            <img
              className="s-20 lg:s-28 xl:s-40"
              src={require("~/assets/image/code.png")}
              role="presentation"
              alt="presentation"
            />
          </motion.div>
        </div>

        {/* dashboard */}
        <div
          className={clsx(
            "absolute",
            "-bottom-[20rem] right-0",
            "md:bottom-[-12rem] md:right-[-8rem]",
            "lg:bottom-[-13rem] lg:right-[-10rem]",
            "xl:bottom-[-15rem] xl:right-[-12rem]",
            "2xl:bottom-[-18rem] 2xl:right-[-8rem]"
          )}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={useAnimationSeq(fadein, floating)}
          >
            <img
              className="2xl:s-68 s-32 md:s-48 lg:s-56 xl:s-64"
              role="presentation"
              alt="presentation"
              src={require("~/assets/image/dashboard-2x.png")}
            />
          </motion.div>
        </div>

        {/* arrow */}
        <DecorationArrow
          className={clsx(
            "absolute hidden md:block",
            "top-[5.5rem] left-[-6rem]",
            "lg:top-[7.5rem] lg:left-[-3rem]",
            "xl:top-[9rem]",
            "2xl:top-[10.4rem] 2xl:left-[1rem] "
          )}
        />

        {/* pac-man */}
        <DecorationPacMan
          className={clsx(
            "absolute hidden md:block",
            "right-[-10rem] top-[-0.8rem]",
            "lg:right-[-12rem] lg:top-[-1rem]",
            "xl:right-[-14rem]",
            "2xl:top-[-2rem]"
          )}
        />

        {/* 4th */}
        <div
          className={clsx(
            "absolute -top-1/2",
            "right-1/2 translate-x-1/2",
            "md:right-0 md:translate-x-full"
          )}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={useAnimationSeq(fadein)}
          >
            <GlitchText
              className={clsx(
                "block",
                "font-pilot-command-italic tracking-[0.2em]",
                "text-3xl lg:text-4xl xl:text-5xl"
              )}
              offset={2}
            >
              4TH
            </GlitchText>
          </motion.div>
        </div>

        {/* the f2e */}
        <motion.div initial={{ opacity: 0 }} animate={useAnimationSeq(fadein)}>
          <GlitchText
            className={clsx(
              "mt-4",
              "block",
              "font-monument-extended tracking-[0.2em]",
              "text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
            )}
            offset={3}
          >
            THE F2E
          </GlitchText>
        </motion.div>
      </div>

      {/* title */}
      <h1
        className={clsx(
          "mt-8",
          "font-noto-sans-tc",
          "tracking-[1rem]",
          "text-xl xl:text-2xl",
          "w-max text-center"
        )}
      >
        互動式網頁設計
      </h1>

      {/* register */}
      <motion.button
        whileHover={{
          scale: 1.2,
          filter: `brightness(1.5)`,
          boxShadow: `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`,
        }}
        whileTap={{
          scale: 0.9,
          filter: `brightness(1.5)`,
          boxShadow: `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`,
        }}
        className={clsx(
          button.yellow,
          "font-noto-sans-tc",
          "mt-16 lg:mt-20",
          "text-xl xl:text-2xl",
          "font-bold",
          "tracking-[0.02em]",
          "w-max",
          "px-10 py-3",
          "xl:px-12 xl:py-4"
        )}
      >
        立即報名
      </motion.button>

      {/* marquee */}
      <div className="mt-auto w-full">
        <Marquee className="gap-6">
          <NeonText className="h4 w-max font-monument-extended uppercase">
            join us
          </NeonText>
          <SVG
            className="mb-1 w-6"
            src={require("~/assets/icon/little-star.svg")}
          />
        </Marquee>
      </div>
    </section>
  );
}

export default Banner;
