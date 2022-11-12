import clsx from "clsx";
import { flex, section } from "~/styles/common";

function Sponsors() {
  return (
    <section
      className={clsx(
        section,
        flex.center,
        "font-noto-sans-tc",
        "bg-neutral-3",
        "text-center"
      )}
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

      <ul className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-12">
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
