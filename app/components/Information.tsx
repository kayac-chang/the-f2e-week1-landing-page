import clsx from "clsx";
import { motion } from "framer-motion";
import SVG from "~/components/SVG";
import { badge, card, section } from "~/styles/common";
import type { Variants } from "framer-motion";
import { links } from "~/utils/const";

const flip: Variants = {
  initial: {
    rotateY: 180,
  },
  animate: {
    rotateY: [180, 0],
    transition: { duration: 1 },
  },
};

const move_up = (index: number, max: number): Variants => ({
  initial: {
    y: 200 * ((max - index) / max),
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      delayChildren: index,
    },
  },
});

const stretched = clsx(
  "before:absolute before:inset-0"
  //
);

const underline = clsx(
  "relative",
  "after:absolute after:bottom-0",
  "after:block after:w-full after:h-0.5",
  "after:bg-current",
  "after:origin-left",
  "after:transition-transform after:duration-300"
  //
);

type CardProps = {
  badge: string;
  title: string;
  subTitle: string;
  image: string;
  week: string;
  href: string;
  whileInView?: boolean;
};
function Card(props: CardProps) {
  return (
    <div style={{ perspective: 500 }}>
      <motion.div
        variants={flip}
        style={{
          transformStyle: "preserve-3d",
        }}
        {...(props.whileInView && {
          whileInView: "animate",
          viewport: { once: true },
        })}
      >
        {/* back */}
        <motion.div
          className={clsx(
            card,
            "grid place-content-center",
            "absolute inset-0",
            "gradient-card-bk bg-gradient-to-br"
            //
          )}
          style={{
            backfaceVisibility: "hidden",
            rotateY: 180 + "deg",
          }}
        >
          <strong
            className={clsx(
              "text-3xl",
              "text-2xl text-white",
              "font-monument-extended",
              "uppercase tracking-[0.1em]"
            )}
          >
            WEEK {props.week}
          </strong>

          <img
            src={require("~/assets/image/lock.png")}
            role="presentation"
            alt="presentation"
          />
        </motion.div>

        {/* front */}
        <motion.div
          className={clsx(card, "relative bg-white p-4 text-primary-3")}
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <div className={badge}>
            <strong className="text-neutral-5">{props.badge}</strong>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold uppercase">{props.title}</h3>
            <p className="font-montserrat text-xl font-medium">
              {props.subTitle}
            </p>
          </div>

          <img
            className="w-[70%]"
            src={props.image}
            role="presentation"
            alt="presentation"
          />

          <div className="sub-title flex w-full items-center justify-between">
            <p className="font-monument-extended tracking-widest text-primary-2">
              WEEK {props.week}
            </p>

            <a
              href={props.href}
              className={clsx(
                "group flex items-center",
                stretched
                //
              )}
            >
              <strong
                className={clsx(
                  underline,
                  "after:scale-0 group-hover:after:scale-100"
                )}
              >
                查看關卡細節
              </strong>
              <SVG
                className={clsx(
                  "w-6",
                  "transition-transform duration-300",
                  "group-hover:translate-x-0.5",
                  "group-hover:-translate-y-0.5"
                  //
                )}
                src={require("~/assets/icon/arrow-up-right.svg")}
              />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Information() {
  return (
    <section
      className={clsx(
        section,
        "font-noto-sans-tc",
        "px-4 py-16 lg:pt-32",
        "items-center gap-12",
        "text-center"
      )}
    >
      <h2
        className={clsx(
          "text-4xl font-medium",
          "rounded-full",
          "text-secondary-1",
          "border-4 border-secondary-1",
          "shadow-secondary-1 shadow-lg text-shadow-md",
          "px-12 py-4",
          "relative",
          "flex flex-col gap-3 md:flex-row"
        )}
      >
        {/* light big */}
        <img
          className="absolute right-0 bottom-full w-12 translate-x-4"
          src={require("~/assets/image/decoration/light.png")}
          role="presentation"
          alt="presentation"
        />

        {/* light small */}
        <img
          className={clsx(
            "absolute right-0 bottom-full",
            "translate-x-6 translate-y-6 rotate-[32deg]",
            "w-8"
          )}
          src={require("~/assets/image/decoration/light.png")}
          role="presentation"
          alt="presentation"
        />

        <div>年度最強合作</div>
        <div>三大主題來襲</div>
      </h2>

      <div className="text-xl">
        <div>各路廠商強強聯手</div>
        <div>共同設計出接地氣的</div>
        <div>網頁互動挑戰關卡</div>
      </div>

      <div
        className={clsx(
          "max-w-screen-md lg:max-w-screen-lg ",
          "grid gap-12 lg:grid-cols-3"
          //
        )}
      >
        {/* card 1 / sm */}
        <div className="md:hidden">
          <Card
            badge="# 板塊設計"
            title="The F2E 活動網站設計"
            subTitle="視覺滾動"
            image={require("~/assets/image/dashboard-1x.png")}
            week="1"
            href={links.week1}
            whileInView
          />
        </div>
        {/* card 1 / lg */}
        <motion.div className="hidden md:block" variants={move_up(0, 3)}>
          <Card
            badge="# 板塊設計"
            title="The F2E 活動網站設計"
            subTitle="視覺滾動"
            image={require("~/assets/image/dashboard-1x.png")}
            week="1"
            href={links.week1}
          />
        </motion.div>

        {/* card 2 / sm */}
        <div className="md:hidden">
          <Card
            badge="# 凱鈿行動科技"
            title="今晚，我想來點點簽"
            subTitle="CANVAS"
            image={require("~/assets/image/edit.png")}
            week="2"
            href={links.week2}
            whileInView
          />
        </div>
        {/* card 2 / lg */}
        <motion.div className="hidden md:block" variants={move_up(1, 3)}>
          <Card
            badge="# 凱鈿行動科技"
            title="今晚，我想來點點簽"
            subTitle="CANVAS"
            image={require("~/assets/image/edit.png")}
            week="2"
            href={links.week2}
          />
        </motion.div>

        {/* card 3 / sm */}
        <div className="md:hidden">
          <Card
            badge="# 鈦坦科技"
            title="Scrum 新手村"
            subTitle="JS Draggable"
            image={require("~/assets/image/exchange.png")}
            week="3"
            href={links.week3}
            whileInView
          />
        </div>
        {/* card 3 / lg */}
        <motion.div className="hidden md:block" variants={move_up(2, 3)}>
          <Card
            badge="# 鈦坦科技"
            title="Scrum 新手村"
            subTitle="JS Draggable"
            image={require("~/assets/image/exchange.png")}
            week="3"
            href={links.week3}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Information;
