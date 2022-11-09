import clsx from "clsx";
import SVG from "~/components/SVG";
import Marquee from "~/components/Marquee";
import { flex, section } from "~/styles/common";

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

          {/* right hand */}
          <img
            className={clsx(
              "w-48",
              "md:w-60",
              "absolute",
              "-top-[80%] rotate-[-54deg]",
              "md:top-0 md:-right-1/2 md:rotate-0"
              //
            )}
            src={require("~/assets/image/right-hand.png")}
            role="presentation"
            alt="presentation"
          />

          {/* left hand */}
          <img
            className={clsx(
              "w-48",
              "md:w-60",
              "absolute -scale-100",
              "-bottom-[80%] rotate-[48deg]",
              "md:top-0 md:-left-1/2 md:rotate-0 md:scale-100"
              //
            )}
            src={require("~/assets/image/left-hand.png")}
            role="presentation"
            alt="presentation"
          />

          {/* title */}
          <div className={clsx(flex.center, "relative w-full")}>
            <SVG
              className="w-full"
              src={require("~/assets/icon/dialog-strong.svg")}
            />
            <SVG
              className="absolute w-11/12"
              src={require("~/assets/icon/title.svg")}
            />
            <h2 className="sr-only">互動式網頁設計</h2>
          </div>

          <div
            className={clsx(
              flex.row_center,
              "mt-2 gap-8",
              "font-noto-sans-tc text-xl text-black"
            )}
          >
            <strong>前端工程師</strong>
            <SVG className="s-6" src={require("~/assets/icon/close.svg")} />
            <strong>UI設計師</strong>
          </div>
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
