import clsx from "clsx";
import SVG from "~/components/SVG";
import { section } from "~/styles/common";

function Issue() {
  return (
    <section className={clsx(section, "px-6")}>
      <h2 className="sr-only">issue</h2>

      <div className="relative flex-1">
        <img
          className="absolute bottom-32 left-14 w-28"
          src={require("~/assets/image/dialog/dialog-1.png")}
          role="presentation"
          alt="presentation"
        />

        <SVG
          className="absolute bottom-36 right-32 w-6"
          src={require("~/assets/icon/star.svg")}
        />

        <img
          className="absolute bottom-32 right-10 w-16"
          src={require("~/assets/image/dialog/dialog-2.png")}
          role="presentation"
          alt="presentation"
        />

        <div className="absolute bottom-0">
          <div className="relative flex w-max justify-center">
            <img
              className="w-72"
              src={require("~/assets/image/dialog/dialog-purple.png")}
              role="presentation"
              alt="presentation"
            />
            <span className="ch h5 absolute top-7 rotate-[-4deg] text-neutral-5">
              羨慕別人的酷酷網頁動畫？
            </span>
          </div>
        </div>
      </div>

      <div className="relative flex-1">
        <SVG
          className="absolute top-20 left-16 w-4"
          src={require("~/assets/icon/circle.svg")}
        />

        <img
          className="absolute bottom-4 w-24"
          src={require("~/assets/image/dialog/dialog-3.png")}
          role="presentation"
          alt="presentation"
        />

        <SVG
          className="absolute bottom-8 right-8 w-12"
          src={require("~/assets/icon/triangle.svg")}
        />

        <div className="absolute right-0 top-10">
          <div className="relative flex w-max rotate-6 justify-center">
            <img
              className="w-64"
              src={require("~/assets/image/dialog/dialog-green.png")}
              role="presentation"
              alt="presentation"
            />
            <span className="ch h5 absolute top-12 rotate-[-12deg] text-neutral-5">
              滿足不了同事的許願？
            </span>
          </div>
        </div>
      </div>

      <div className="relative flex-1">
        <img
          className="absolute right-2 bottom-6 w-20"
          src={require("~/assets/image/dialog/dialog-4.png")}
          role="presentation"
          alt="presentation"
        />

        <img
          className="absolute left-28 w-32"
          src={require("~/assets/image/dialog/dialog-5.png")}
          role="presentation"
          alt="presentation"
        />

        <div className="absolute top-16">
          <div className="relative flex w-max -rotate-6 justify-center">
            <img
              className="w-72"
              src={require("~/assets/image/dialog/dialog-purple.png")}
              role="presentation"
              alt="presentation"
            />
            <span className="ch h5 absolute top-7 rotate-[-2deg] text-neutral-5">
              動畫技能樹太雜無從下手？
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Issue;
