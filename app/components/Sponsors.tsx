import clsx from "clsx";
import { flex, section } from "~/styles/common";
import { onlyPropagationWhenOverScroll } from "~/utils/dom";

function Sponsors() {
  return (
    <section
      className={clsx(
        section,
        flex.col_center,
        "font-noto-sans-tc",
        "bg-neutral-3",
        "text-center",
        "gap-8",
        "px-8 py-16 sm:py-64",
        "overflow-scroll"
      )}
      onWheel={onlyPropagationWhenOverScroll}
    >
      <h2 className="relative">
        <img
          className="absolute -right-8 -top-2 w-8"
          src={require("~/assets/image/decoration/shiny.png")}
          role="presentation"
          alt="presentation"
        />
        <img
          className="absolute -left-10 top-6"
          src={require("~/assets/image/decoration/shiny.png")}
          role="presentation"
          alt="presentation"
        />
        <div className="font-monument-extended text-3xl uppercase tracking-[0.1em]">
          Sponsors
        </div>
        <div className="text-2xl font-bold">鑽石級贊助商</div>
      </h2>

      <ul className={clsx("grid gap-12 sm:grid-cols-3")}>
        <li>
          <div className="w-40">
            <img
              className="w-full"
              src={require("~/assets/sponsor/block-studio-default.png")}
              alt="block studio"
            />
          </div>
        </li>
        <li>
          <div className="w-40">
            <img
              className="w-full"
              src={require("~/assets/sponsor/kdan-default.png")}
              alt="kdan"
            />
          </div>
        </li>
        <li>
          <div className="w-40">
            <img
              className="w-full"
              src={require("~/assets/sponsor/titansoft-default.png")}
              alt="titansoft"
            />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Sponsors;
