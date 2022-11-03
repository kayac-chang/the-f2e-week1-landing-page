import clsx from "clsx";
import { last, map, multiply, range } from "ramda";
import { ComponentProps, Fragment } from "react";
import { GlitchText, NeonText } from "~/components/RichText";
import SVG from "~/components/SVG";
import { button, flex, section } from "~/styles/common";
import { getSrcSet } from "~/utils/image";

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
    .map(map(multiply(spacing)));

  const last_positions = (() => {
    const [x, y] = last(positions)!;

    return [x + spacing, y];
  })();

  return (
    <div {...props}>
      <div className="relative s-10">
        <div
          className="absolute"
          style={{
            transform: `translate(${-1 * spacing}rem, ${0}rem)`,
          }}
        >
          <img
            src={require("~/assets/image/decoration/ball-purple.png")}
            role="presentation"
            alt="presentation"
            className="w-4 -translate-x-[50%] -translate-y-[40%]"
          />
        </div>

        {positions.map(([x, y]) => (
          <img
            key={JSON.stringify([x, y])}
            src={require("~/assets/image/decoration/ball-white.png")}
            role="presentation"
            alt="presentation"
            className="absolute w-[0.2rem] lg:w-1"
            style={{
              transform: `translate(${x}rem, ${y}rem)`,
            }}
          />
        ))}

        <div
          className="absolute"
          style={{
            transform: `translate(${last_positions[0]}rem, ${last_positions[1]}rem)`,
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
    .map(map(multiply(spacing)));

  const last_positions = (() => {
    const [x, y] = last(positions)!;

    return [x + spacing, y];
  })();

  return (
    <div {...props}>
      <div className="relative s-10">
        {positions.map(([x, y]) => (
          <img
            key={JSON.stringify([x, y])}
            src={require("~/assets/image/decoration/ball-white.png")}
            role="presentation"
            alt="presentation"
            className="absolute w-1"
            style={{
              transform: `translate(${x}rem, ${y}rem)`,
            }}
          />
        ))}

        <div
          className="absolute"
          style={{
            transform: `translate(${last_positions[0]}rem, ${last_positions[1]}rem)`,
          }}
        >
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

function Banner() {
  return (
    <section
      className={clsx(
        section,
        "items-center text-center",
        "pt-56 pb-10",
        "sm:pt-80",
        "md:pt-80"
      )}
    >
      <div className="relative">
        {/* code: fade in / move up / floating */}
        <img
          className={clsx(
            "absolute",
            "s-20 lg:s-28 xl:s-40",
            "rotate-[-20deg]",
            "top-[-8rem]",
            "md:top-[2rem] md:left-[-11rem]",
            "lg:left-[-10rem]",
            "xl:left-[-14rem]",
            "2xl:left-[-10rem] 2xl:top-[5rem]"
          )}
          src={require("~/assets/image/code.png")}
          role="presentation"
          alt="presentation"
        />

        {/* dashboard: fade in / move up / floating */}
        <img
          className={clsx(
            "absolute",
            "2xl:s-68 s-32 md:s-48 lg:s-56 xl:s-64",
            "-bottom-[20rem] right-0",
            "md:bottom-[-12rem] md:right-[-8rem]",
            "lg:bottom-[-13rem] lg:right-[-10rem]",
            "xl:bottom-[-15rem] xl:right-[-12rem]",
            "2xl:bottom-[-18rem] 2xl:right-[-8rem]"
          )}
          role="presentation"
          alt="presentation"
          srcSet={getSrcSet([
            {
              src: require("~/assets/image/dashboard-2x.png"),
              width: `623w`,
            },
            {
              src: require("~/assets/image/dashboard-1x.png"),
              width: `312w`,
            },
            {
              src: require("~/assets/image/dashboard-0.5x.png"),
              width: `131w`,
            },
          ])}
        />

        <DecorationArrow
          className={clsx(
            "absolute hidden md:block",
            "top-[5.5rem] left-[-6rem]",
            "lg:top-[7.5rem] lg:left-[-3rem]",
            "xl:top-[9rem]",
            "2xl:top-[10.4rem] 2xl:left-[1rem] "
          )}
        />

        <DecorationPacMan
          className={clsx(
            "absolute hidden md:block",
            "right-[-10rem] top-[-0.8rem]",
            "lg:right-[-12rem] lg:top-[-1rem]",
            "xl:right-[-14rem]",
            "2xl:top-[-2rem]"
          )}
        />

        {/* fade in / move up */}
        <GlitchText
          className={clsx(
            "block",
            "font-pilot-command-italic tracking-[0.2em]",
            "text-3xl lg:text-4xl xl:text-5xl",
            "absolute -top-1/2",
            "right-1/2 translate-x-1/2",
            "md:right-0 md:translate-x-full"
          )}
          offset={2}
        >
          4TH
        </GlitchText>

        {/* fade in / move up */}
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
      <button
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
      </button>

      {/* marquee */}
      <div className={clsx("mt-auto", flex.nowrap, "gap-6")}>
        {range(0, 20).map((i) => (
          <Fragment key={i}>
            <NeonText className="h4 w-max font-monument-extended uppercase">
              join us
            </NeonText>
            <SVG
              className="w-6"
              src={require("~/assets/icon/little-star.svg")}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default Banner;
