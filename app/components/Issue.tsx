import clsx from "clsx";
import { motion } from "framer-motion";
import SVG from "~/components/SVG";
import { section } from "~/styles/common";
import { easeOutElastic } from "~/utils/ease";
import type { Variants } from "framer-motion";

const variants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: easeOutElastic,
      duration: 0.8,
    },
  },
};

function Issue() {
  return (
    <section
      className={clsx(
        section,
        "px-6 py-8",
        "md:scale-[1.2] md:gap-2"
        //
      )}
    >
      <h2 className="sr-only">issue</h2>

      {/* issue 1 */}
      <motion.div
        variants={variants}
        className={clsx(
          "relative",
          "flex flex-1 flex-col justify-center",
          "mx-auto w-full max-w-lg",
          "sm:scale-[1.2]"
          //
        )}
      >
        <img
          className={clsx(
            "w-32",
            "sm:w-40",
            "absolute",
            "bottom-32 left-14",
            "sm:bottom-36"
            //
          )}
          src={require("~/assets/image/dialog/dialog-1.png")}
          role="presentation"
          alt="presentation"
        />

        <SVG
          className={clsx(
            "w-8",
            "sm:w-10",
            "absolute",
            "bottom-36 left-52",
            "sm:left-60"
            //
          )}
          src={require("~/assets/icon/star.svg")}
        />

        <img
          className={clsx(
            "w-20",
            "sm:w-28",
            "absolute",
            "bottom-28 left-64",
            "sm:left-[23rem] sm:bottom-20"
            //
          )}
          src={require("~/assets/image/dialog/dialog-2.png")}
          role="presentation"
          alt="presentation"
        />

        <div
          className={clsx(
            "relative",
            "mt-auto mr-auto",
            "w-[18rem] text-xl",
            "sm:w-[22rem] sm:text-2xl",
            "flex items-center justify-center"
            //
          )}
        >
          <img
            className="shadow-primary-1 drop-shadow"
            src={require("~/assets/icon/dialog-1.svg")}
            role="presentation"
            alt="presentation"
          />
          <span
            className={clsx(
              "absolute",
              "top-7 rotate-[-2deg]",
              "sm:top-9",
              "text-neutral-5"
              //
            )}
          >
            羨慕別人的酷酷網頁動畫？
          </span>
        </div>
      </motion.div>

      {/* issue 2 */}
      <motion.div
        variants={variants}
        className={clsx(
          "relative",
          "flex flex-1 flex-col justify-center",
          "mx-auto w-full max-w-lg",
          "sm:scale-[1.2]"
          //
        )}
      >
        <SVG
          className={clsx(
            "w-6",
            "sm:w-6",
            "absolute",
            "right-64 top-12",
            "sm:top-20 sm:right-[21rem]"
            //
          )}
          src={require("~/assets/icon/circle.svg")}
        />

        <img
          className={clsx(
            "w-24",
            "sm:w-28",
            "absolute",
            "top-32 right-64",
            "sm:right-[20rem] sm:top-[10rem]"
            //
          )}
          src={require("~/assets/image/dialog/dialog-3.png")}
          role="presentation"
          alt="presentation"
        />

        <SVG
          className={clsx(
            "w-12",
            "sm:w-16",
            "absolute",
            "right-14 top-40",
            "xs:top-48"
            //
          )}
          src={require("~/assets/icon/triangle.svg")}
        />

        <div
          className={clsx(
            "relative",
            "ml-auto mb-8",
            "w-[16rem] text-xl",
            "sm:w-[20rem] sm:text-2xl",
            "sm:-translate-y-8",
            "flex items-center justify-center",
            "rotate-[8deg]",
            "sm:rotate-[0deg]"
            //
          )}
        >
          <img
            className="shadow-secondary-1 drop-shadow"
            src={require("~/assets/icon/dialog-2.svg")}
            role="presentation"
            alt="presentation"
          />
          <span
            className={clsx(
              "absolute",
              "top-18 rotate-[-15deg]",
              "text-neutral-5"
              //
            )}
          >
            滿足不了同事的許願？
          </span>
        </div>
      </motion.div>

      {/* issue 3 */}
      <motion.div
        variants={variants}
        className={clsx(
          "relative",
          "flex flex-1 flex-col justify-center",
          "mx-auto w-full max-w-lg",
          "sm:scale-[1.2]"
          //
        )}
      >
        <img
          className={clsx(
            "w-20",
            "sm:w-28",
            "absolute",
            "left-64 top-36",
            "sm:top-12 sm:left-96"
            //
          )}
          src={require("~/assets/image/dialog/dialog-4.png")}
          role="presentation"
          alt="presentation"
        />

        <img
          className={clsx(
            "w-32",
            "sm:w-40",
            "absolute",
            "left-20 top-0",
            "sm:left-28"
            //
          )}
          src={require("~/assets/image/dialog/dialog-5.png")}
          role="presentation"
          alt="presentation"
        />

        <div
          className={clsx(
            "relative",
            "mr-auto",
            "w-[18rem] text-xl",
            "sm:w-[22rem] sm:text-2xl",
            "flex items-center justify-center",
            "rotate-[-6deg]"
            //
          )}
        >
          <img
            className="shadow-primary-1 drop-shadow"
            src={require("~/assets/icon/dialog-1.svg")}
            role="presentation"
            alt="presentation"
          />
          <span
            className={clsx(
              "absolute",
              "top-7",
              "sm:top-9",
              "rotate-[-2deg]",
              "text-neutral-5"
              //
            )}
          >
            動畫技能樹太雜無從下手？
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default Issue;
