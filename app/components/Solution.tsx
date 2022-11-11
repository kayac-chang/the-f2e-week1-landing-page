import clsx from "clsx";
import { motion } from "framer-motion";
import SVG from "~/components/SVG";
import Marquee from "~/components/Marquee";
import { flex, section } from "~/styles/common";
import { merge } from "~/utils/animation";
import type { Variants } from "framer-motion";

const fade_in: Variants = {
  animate: {
    opacity: [0, 1],
    transition: {
      duration: 1,
    },
  },
};

const scale_up: Variants = {
  animate: {
    scale: [0.85, 1],
  },
};

const move: Record<string, Variants> = {
  down: {
    animate: {
      y: [-30, 0],
    },
  },
  up: {
    animate: {
      y: [30, 0],
    },
  },
  right: {
    animate: {
      x: [-30, 0],
    },
  },
  left: {
    animate: {
      x: [30, 0],
    },
  },
};

function Solution() {
  return (
    <section
      className={clsx(section, "relative", "bg-center")}
      style={{
        backgroundImage: `url(${require("~/assets/image/background.jpg")})`,
      }}
    >
      <h2 className="sr-only">solution</h2>

      {/* marquee */}
      <div
        className={clsx(
          "gradient-decoration bg-gradient-to-r",
          "py-2 px-2"
          //
        )}
      >
        <Marquee className="gap-6">
          <span
            className={clsx(
              "font-monument-extended text-xl",
              "whitespace-nowrap tracking-[0.1em]"
              //
            )}
          >
            INTERACTIVE WEB DESIGN
          </span>
          <img
            src={require("~/assets/image/decoration/ball-white.png")}
            role="presentation"
            alt="presentation"
          />
        </Marquee>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={clsx(
            "relative flex flex-col items-center justify-center",
            "w-[75vw] max-w-sm",
            "md:max-w-md",
            "lg:max-w-lg"
            //
          )}
        >
          {/* banner purple */}
          <img
            className={clsx(
              "absolute",
              "scale-75",
              "md:scale-100",
              "-top-[50%] -right-[20%]",
              "md:-top-[30%] md:-right-[10%]"
              //
            )}
            src={require("~/assets/image/banner-purple.png")}
            role="presentation"
            alt="presentation"
          />

          {/* banner yellow */}
          <img
            className={clsx(
              "absolute",
              "-bottom-[140%] -left-[30%]",
              "md:-bottom-[90%] md:-left-[50%]"
              //
            )}
            src={require("~/assets/image/banner-yellow.png")}
            role="presentation"
            alt="presentation"
          />

          {/* right hand / sm */}
          <motion.div
            className={clsx(
              "absolute",
              "-top-[80%]",
              "md:hidden"
              //
            )}
            variants={merge(fade_in, move.up)}
          >
            <img
              className={clsx(
                "w-48",
                "md:w-60",
                "rotate-[-54deg]",
                "md:rotate-0"
                //
              )}
              src={require("~/assets/image/right-hand.png")}
              role="presentation"
              alt="presentation"
            />
          </motion.div>
          {/* right hand / md */}
          <motion.div
            className={clsx(
              "hidden md:block",
              "absolute",
              "top-0 -right-1/2"
              //
            )}
            variants={merge(fade_in, move.right)}
          >
            <img
              className={clsx(
                "w-48",
                "md:w-60",
                "rotate-[-54deg]",
                "md:rotate-0"
                //
              )}
              src={require("~/assets/image/right-hand.png")}
              role="presentation"
              alt="presentation"
            />
          </motion.div>

          {/* left hand / sm */}
          <motion.div
            className={clsx(
              "absolute",
              "-bottom-[80%]",
              "md:hidden"
              //
            )}
            variants={merge(fade_in, move.down)}
          >
            <img
              className={clsx(
                "w-48",
                "md:w-60",
                "-scale-100",
                "rotate-[48deg]",
                "md:rotate-0 md:scale-100"
                //
              )}
              src={require("~/assets/image/left-hand.png")}
              role="presentation"
              alt="presentation"
            />
          </motion.div>
          {/* left hand / md */}
          <motion.div
            className={clsx(
              "hidden md:block",
              "absolute",
              "-bottom-[80%]",
              "top-0 -left-1/2"
              //
            )}
            variants={merge(fade_in, move.left)}
          >
            <img
              className={clsx(
                "w-48",
                "md:w-60",
                "-scale-100",
                "rotate-[48deg]",
                "md:rotate-0 md:scale-100"
                //
              )}
              src={require("~/assets/image/left-hand.png")}
              role="presentation"
              alt="presentation"
            />
          </motion.div>

          {/* title */}
          <motion.div
            className={clsx(flex.center, "relative w-full")}
            variants={merge(fade_in, scale_up)}
          >
            <SVG
              className="w-full"
              src={require("~/assets/icon/dialog-strong.svg")}
            />
            <SVG
              className="absolute w-full"
              src={require("~/assets/icon/title.svg")}
            />
            <h2 className="sr-only">互動式網頁設計</h2>
          </motion.div>

          <motion.div
            className={clsx(
              flex.row_center,
              "mt-2 gap-8",
              "font-noto-sans-tc text-xl text-black"
            )}
            variants={merge(fade_in, scale_up)}
          >
            <strong>前端工程師</strong>
            <SVG className="s-6" src={require("~/assets/icon/close.svg")} />
            <strong>UI設計師</strong>
          </motion.div>
        </div>
      </div>

      {/* marquee */}
      <div
        className={clsx(
          "gradient-decoration bg-gradient-to-r",
          "py-2 px-2",
          "z-10 mt-auto"
          //
        )}
      >
        <Marquee className="gap-6">
          <span
            className={clsx(
              "font-monument-extended text-xl",
              "whitespace-nowrap tracking-[0.1em]"
              //
            )}
          >
            INTERACTIVE WEB DESIGN
          </span>
          <img
            src={require("~/assets/image/decoration/ball-white.png")}
            role="presentation"
            alt="presentation"
          />
        </Marquee>
      </div>
    </section>
  );
}
export default Solution;
