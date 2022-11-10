import clsx from "clsx";
import SVG from "~/components/SVG";
import { useBreakPoint } from "~/hooks/useMediaQuery";
import { badge, card, section } from "~/styles/common";
import { onlyPropagationWhenOverScroll } from "~/utils/dom";

type CardProps = {
  badge: string;
  title: string;
  subTitle: string;
  image: string;
  week: string;
};
function Card(props: CardProps) {
  return (
    <div className={clsx(card, "p-4", "bg-white text-primary-3")}>
      <div className={badge}>
        <strong className="text-neutral-5">{props.badge}</strong>
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-bold uppercase">{props.title}</h3>
        <p className="font-montserrat text-xl font-medium">{props.subTitle}</p>
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

        <a href="/" className="flex items-center">
          <strong>查看關卡細節</strong>
          <SVG
            className="w-6"
            src={require("~/assets/icon/arrow-up-right.svg")}
          />
        </a>
      </div>
    </div>
  );
}

function Information() {
  return (
    <section
      className={clsx(
        section,
        "font-noto-sans-tc",
        "px-8 py-16",
        "items-center gap-12",
        "text-center",
        "overflow-scroll"
      )}
      {...(!useBreakPoint("lg") && {
        onWheel: onlyPropagationWhenOverScroll,
      })}
    >
      <h2
        className={clsx(
          "text-4xl font-medium",
          "rounded-full",
          "text-secondary-1",
          "border-4 border-secondary-1",
          "text-shadow shadow shadow-secondary-1",
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

      <div className="grid max-w-screen-md gap-12 lg:max-w-screen-lg lg:grid-cols-3">
        {/* card 1 */}
        <Card
          badge="# 板塊設計"
          title="The F2E 活動網站設計"
          subTitle="視覺滾動"
          image={require("~/assets/image/dashboard-1x.png")}
          week="1"
        />

        {/* card 2 */}
        <Card
          badge="# 凱鈿行動科技"
          title="今晚，我想來點點簽"
          subTitle="CANVAS"
          image={require("~/assets/image/edit.png")}
          week="2"
        />

        {/* card 3 */}
        <Card
          badge="# 鈦坦科技"
          title="Scrum 新手村"
          subTitle="JS Draggable"
          image={require("~/assets/image/exchange.png")}
          week="3"
        />
      </div>
    </section>
  );
}

export default Information;
