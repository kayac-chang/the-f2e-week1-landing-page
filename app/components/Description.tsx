import clsx from "clsx";
import { range } from "ramda";
import { Fragment } from "react";
import { card, section, flex } from "~/styles/common";
import { percent } from "~/utils/math";

type CardProps = {
  title: string;
  image: string;
  times: { date: string; time: string }[];
  hideDivider?: boolean;
  note?: string;
  reverseOrder?: boolean;
};
function Card(props: CardProps) {
  return (
    <div
      className={clsx(
        card,
        "border-4 p-8",
        "text-center md:text-left",
        props.reverseOrder ? "md:flex-row-reverse" : "md:flex-row",
        "group",
        "hover:border-primary-1",
        "shadow-primary-1 hover:shadow-lg"
      )}
    >
      <div className={clsx(flex.center, "md:flex-1")}>
        <img src={props.image} role="presentation" alt="presentation" />
      </div>
      <div className="md:flex-1">
        <h3
          className={clsx(
            "text-2xl font-bold",
            "group-hover:text-primary-1",
            "group-hover:text-shadow-md",
            "group-hover:shadow-primary-1/50"
            //
          )}
        >
          {props.title}
        </h3>

        <div className="mt-4 flex flex-col gap-2">
          {props.times.map((time, index) => (
            <Fragment key={time.date + time.time}>
              <time className="inline-block space-x-2">
                <span className="text-secondary-1">{time.date}</span>
                <span>{time.time}</span>
              </time>

              {!props.hideDivider && index < props.times.length - 1 && (
                <span className="mx-auto">|</span>
              )}
            </Fragment>
          ))}
        </div>

        {props.note && <p className="mt-2">{props.note}</p>}
      </div>
    </div>
  );
}

function Description() {
  return (
    <section
      className={clsx(
        section,
        "font-noto-sans-tc",
        "px-4 py-16 lg:pt-32",
        "items-center gap-12",
        "text-center",
        "bg-neutral-4"
      )}
    >
      <h2 className="flex items-center">
        <img
          className="mr-2 w-8"
          src={require("~/assets/image/decoration/player.png")}
          role="presentation"
          alt="presentation"
        />
        <div className="flex items-center gap-4">
          {range(0, 3).map((i) => (
            <img
              key={i}
              src={require("~/assets/image/decoration/ball-white.png")}
              role="presentation"
              alt="presentation"
            />
          ))}
        </div>
        <strong
          className={clsx(
            "mx-4",
            "shadow-white/75 text-shadow-lg",
            "text-3xl lg:text-5xl"
            //
          )}
        >
          ????????????
        </strong>

        <div className="flex items-center gap-4">
          {range(0, 3).map((i) => (
            <img
              key={i}
              src={require("~/assets/image/decoration/ball-white.png")}
              role="presentation"
              alt="presentation"
            />
          ))}
        </div>
        <img
          className="ml-2"
          src={require("~/assets/image/decoration/ball-purple.png")}
          role="presentation"
          alt="presentation"
        />
      </h2>

      <div
        className={clsx(
          "grid",
          "gap-4 lg:gap-20",
          "max-w-lg lg:max-w-screen-lg",
          "lg:grid-cols-2",
          "lg:relative"
          //
        )}
      >
        {/* card 1 */}
        <Card
          title="????????????"
          image={require("~/assets/image/pencil.png")}
          times={[
            { date: "10/13", time: "(???) ?????? 11:00" },
            { date: "10/13", time: "(???) ?????? 23:59" },
          ]}
          note="??????????????????????????????"
        />

        {/* down icon */}
        <img
          className={clsx(
            "mx-auto",
            "lg:absolute",
            "lg:-translate-x-1/2 lg:-translate-y-1/2",
            "lg:rotate-[-90deg]"
            //
          )}
          style={{
            top: percent(1, 5) + "%",
            left: percent(1, 2) + "%",
          }}
          src={require("~/assets/image/down.png")}
          role="presentation"
          alt="presentation"
        />

        {/* card 2 */}
        <Card
          title="???????????????"
          image={require("~/assets/image/clock.png")}
          times={[
            { date: "10/31", time: "UI?????????????????????" },
            { date: "11/07", time: "???????????????" },
          ]}
          note="???????????????????????? UI ???????????????????????????????????????"
          hideDivider
          reverseOrder
        />

        {/* down icon */}
        <img
          className={clsx(
            "mx-auto",
            "lg:absolute",
            "lg:-translate-x-1/2 lg:-translate-y-1/2"
            //
          )}
          style={{
            top: percent(1, 2) + "%",
            left: percent(3, 4) + "%",
          }}
          src={require("~/assets/image/down.png")}
          role="presentation"
          alt="presentation"
        />

        {/* card 3 */}
        <Card
          title="????????????"
          image={require("~/assets/image/folder.png")}
          times={[
            { date: "10/31", time: "(???) ?????? 12:00" },
            { date: "11/28", time: "(???) ?????? 12:00" },
          ]}
          note="?????????????????????"
        />

        {/* down icon */}
        <img
          className={clsx(
            "mx-auto",
            "lg:absolute",
            "lg:-translate-x-1/2 lg:-translate-y-1/2",
            "lg:rotate-[90deg]"
            //
          )}
          style={{
            top: percent(4, 5) + "%",
            left: percent(1, 2) + "%",
          }}
          src={require("~/assets/image/down.png")}
          role="presentation"
          alt="presentation"
        />

        {/* card 4 */}
        <Card
          title="????????????"
          image={require("~/assets/image/play.png")}
          times={[{ date: "11/03 - 11/24", time: "?????????" }]}
          reverseOrder
        />
      </div>
    </section>
  );
}

export default Description;
