import clsx from "clsx";
import { flex, section } from "~/styles/common";
import { links } from "~/utils/const";

const card = clsx(
  "block w-44 [&>*]:p-2 [&>*]:relative",
  "bg-white",
  "rounded-[40px] overflow-hidden",
  "relative",
  "before:bg-gradient-to-br before:gradient-decoration",
  "before:absolute before:inset-0",
  "before:opacity-0",
  "hover:before:opacity-100",
  "before:transition-opacity before:duration-300"
  //
);

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
          <a className={card} href={links.block_studio}>
            <img
              className="w-full"
              src={require("~/assets/sponsor/block-studio-default.png")}
              alt="block studio"
            />
          </a>
        </li>
        <li>
          <a className={card} href={links.kdan}>
            <img
              className="w-full"
              src={require("~/assets/sponsor/kdan-default.png")}
              alt="kdan"
            />
          </a>
        </li>
        <li>
          <a className={card} href={links.titansoft}>
            <img
              className="w-full"
              src={require("~/assets/sponsor/titansoft-default.png")}
              alt="titansoft"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Sponsors;
