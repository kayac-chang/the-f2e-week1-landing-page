import clsx from "clsx";
import { card as _card, section } from "~/styles/common";
import { motion } from "framer-motion";
import { merge } from "~/utils/animation";
import type { ComponentProps } from "react";
import type { TargetAndTransition, Variants } from "framer-motion";

const card = clsx(
  _card,
  "bg-neutral-3",
  "p-6",
  "glassy",
  "before:bg-gradient-to-br",
  "before:gradient-card-solid",
  "after:gradient-decoration after:bg-gradient-to-br",
  "after:opacity-0",
  "after:transition-opacity",
  "hover:after:opacity-100"
);

const bouncing: Variants = {
  animate: {
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const move_up: Variants = {
  animate: {
    y: -20,
  },
};

const stagger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const fade_in: Variants = {
  animate: {
    opacity: [0, 1],
  },
};

function Card(props: ComponentProps<"div">) {
  return (
    <motion.div
      whileHover={merge(move_up, bouncing)["animate"] as TargetAndTransition}
    >
      <div className={clsx(card, "h-full")} {...props} />
    </motion.div>
  );
}

function Award() {
  return (
    <motion.section
      variants={stagger}
      className={clsx(
        section,
        "font-noto-sans-tc",
        "px-4 py-14",
        "items-center gap-12"
      )}
    >
      <header className="w-full max-w-md space-y-4 lg:max-w-screen-lg">
        <h2
          className={clsx(
            "text-center font-bold",
            "text-2xl md:text-3xl lg:text-4xl",
            "text-shadow shadow-white",
            "space-y-2"
          )}
        >
          <div>區區修煉已經無法滿足了嗎？</div>
          <motion.div variants={fade_in}>還有比賽等著你！</motion.div>
        </h2>

        <div className="flex flex-row-reverse items-baseline border-b-4 pb-1">
          <div className="flex-1">
            <motion.img
              variants={{
                animate: {
                  marginLeft: 0,
                  transition: { duration: 1 },
                },
              }}
              className="ml-auto w-20 translate-y-2"
              src={require("~/assets/image/decoration/car.png")}
              role="presentation"
              alt="presentation"
            />
          </div>

          <motion.div
            variants={{
              animate: {
                rotate: -40,
                x: -10,
                y: -15,
                transition: { delay: 2.2 },
              },
            }}
          >
            <img
              className="w-8"
              src={require("~/assets/image/decoration/flag.png")}
              role="presentation"
              alt="presentation"
            />
          </motion.div>
        </div>
      </header>

      <div className="grid max-w-md gap-6 lg:max-w-screen-lg lg:grid-cols-2">
        <Card>
          <img
            src={require("~/assets/image/note.png")}
            role="presentation"
            alt="presentation"
          />

          <h3 className="text-shadow text-3xl font-bold text-primary-1 shadow-primary-1">
            評審機制
          </h3>

          <div className="w-full space-y-2">
            <strong className="text-2xl">初選：</strong>
            <p className="text-xl">將由六角學院前端、UI 評審進行第一波篩選。</p>
          </div>

          <div className="w-full space-y-2">
            <strong className="text-2xl">決選：</strong>
            <p className="text-xl">
              由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
              由評審進行直播公布名單！
            </p>
          </div>
        </Card>

        <Card>
          <img
            src={require("~/assets/image/coin.png")}
            role="presentation"
            alt="presentation"
          />

          <h3 className="text-shadow text-3xl font-bold text-primary-1 shadow-primary-1">
            獎金
          </h3>

          <div className="w-full space-y-2 text-xl">
            <strong>初選佳作：</strong>
            <div className="space-x-2">
              <span>共六十位</span>
              <span className="text-secondary-1">數位獎狀</span>
            </div>
            <p className="text-base text-neutral-2">
              每週主題個人組十位、團體組十組
            </p>
          </div>
          <div className="w-full space-y-2 text-xl">
            <strong>個人企業獎：</strong>
            <div className="space-x-2">
              <span>共六位</span>
              <span className="text-secondary-1">NTD 3,000/位</span>
            </div>
            <p className="text-base text-neutral-2">
              每週主題個人組十位、團體組十組
            </p>
          </div>
          <div className="w-full space-y-2 text-xl">
            <strong>初選佳作：</strong>
            <div className="space-x-2">
              <span>共六十位</span>
              <span className="text-secondary-1">數位獎狀</span>
            </div>
            <p className="text-base text-neutral-2">
              每週主題個人組十位、團體組十組
            </p>
          </div>
          <div className="w-full space-y-2 text-xl">
            <strong>團體企業獎：</strong>
            <div className="space-x-2">
              <span>共三組 </span>
              <span className="text-secondary-1">NTD 10,000/組</span>
            </div>
            <p className="text-base text-neutral-2">每週主題各 1 組</p>
          </div>

          <p className="mt-2 w-full text-xl">以上皆提供完賽數位獎狀</p>
        </Card>
      </div>
    </motion.section>
  );
}
export default Award;
