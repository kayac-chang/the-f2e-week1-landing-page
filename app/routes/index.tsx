import clsx from "clsx";
import { range } from "ramda";
import { Fragment } from "react";
import SVG from "~/components/SVG";
import { GlitchText, NeonText } from "~/components/RichText";

const section = "flex flex-col w-full min-h-screen overflow-hidden";
const marquee = "gap-6 flex flex-nowrap items-center";
const card = "flex flex-col items-center gap-4 rounded-3xl";
const badge = "bg-secondary-1 w-max py-1 px-2 rounded-xl";

function Section1() {
  return (
    <section
      className={clsx(section, "items-center text-center", "pt-56 pb-10")}
    >
      {/* fade in / move up / floating */}
      <img
        className={clsx(
          "absolute s-20",
          "rotate-[-20deg]",
          "translate-x-[-8rem] translate-y-[-6rem]"
        )}
        src={require("~/assets/image/code.png")}
        role="presentation"
        alt="presentation"
      />

      {/* fade in / move up / floating */}
      <img
        className={clsx(
          "absolute s-32",
          "rotate-[16deg]",
          "translate-x-[7rem] translate-y-[20rem]"
        )}
        src={require("~/assets/image/dashboard.png")}
        role="presentation"
        alt="presentation"
      />

      {/* fade in / move up */}
      <GlitchText
        className="block font-pilot-command-italic h3 tracking-[0.2em]"
        offset={2}
      >
        4TH
      </GlitchText>

      {/* fade in / move up */}
      <GlitchText
        className="block font-monument-extended h2 tracking-[0.2em]"
        offset={3}
      >
        THE F2E
      </GlitchText>

      {/* title */}
      <h1 className={clsx("ch h5 tracking-[1rem]", "text-center w-max")}>
        互動式網頁設計
      </h1>

      {/* register */}
      <button
        className={clsx(
          "mt-16",
          "solid yellow",
          "ch h5 font-bold",
          "tracking-[0.02em]",
          "w-max px-10 py-3"
        )}
      >
        立即報名
      </button>

      {/* marquee */}
      <div className={clsx("mt-auto", marquee)}>
        {range(0, 3).map((i) => (
          <Fragment key={i}>
            <NeonText className="font-monument-extended h4 uppercase w-max">
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

function Section2() {
  return (
    <section className={clsx(section, "py-24 px-6")}>
      <h2 className="sr-only">questions</h2>

      <div className="flex-1 relative">
        <img
          className="w-28 absolute bottom-32 left-14"
          src={require("~/assets/image/dialog/dialog-1.png")}
          role="presentation"
          alt="presentation"
        />

        <SVG
          className="w-6 absolute bottom-36 right-32"
          src={require("~/assets/icon/star.svg")}
        />

        <img
          className="w-16 absolute bottom-32 right-10"
          src={require("~/assets/image/dialog/dialog-2.png")}
          role="presentation"
          alt="presentation"
        />

        <div className="absolute bottom-0">
          <div className="relative flex justify-center w-max">
            <img
              className="w-72"
              src={require("~/assets/image/dialog/dialog-purple.png")}
              role="presentation"
              alt="presentation"
            />
            <span className="absolute top-7 text-neutral-5 ch h5 rotate-[-4deg]">
              羨慕別人的酷酷網頁動畫？
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <SVG
          className="w-4 absolute top-20 left-16"
          src={require("~/assets/icon/circle.svg")}
        />

        <img
          className="w-24 absolute bottom-4"
          src={require("~/assets/image/dialog/dialog-3.png")}
          role="presentation"
          alt="presentation"
        />

        <SVG
          className="w-12 absolute bottom-8 right-8"
          src={require("~/assets/icon/triangle.svg")}
        />

        <div className="absolute right-0 top-10">
          <div className="relative flex justify-center w-max rotate-6">
            <img
              className="w-64"
              src={require("~/assets/image/dialog/dialog-green.png")}
              role="presentation"
              alt="presentation"
            />
            <span className="absolute top-12 text-neutral-5 ch h5 rotate-[-12deg]">
              滿足不了同事的許願？
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <img
          className="w-20 absolute right-2 bottom-6"
          src={require("~/assets/image/dialog/dialog-4.png")}
          role="presentation"
          alt="presentation"
        />

        <img
          className="w-32 absolute left-28"
          src={require("~/assets/image/dialog/dialog-5.png")}
          role="presentation"
          alt="presentation"
        />

        <div className="absolute top-16">
          <div className="relative flex justify-center w-max -rotate-6">
            <img
              className="w-72"
              src={require("~/assets/image/dialog/dialog-purple.png")}
              role="presentation"
              alt="presentation"
            />
            <span className="absolute top-7 text-neutral-5 ch h5 rotate-[-2deg]">
              動畫技能樹太雜無從下手？
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section3() {
  return (
    <section className={clsx(section, "relative")}>
      <div className="mt-[4.8rem]">
        <h2 className="sr-only">solution</h2>

        {/* background */}
        <img
          className="h-full object-cover absolute inset-0 -z-10"
          src={require("~/assets/image/background.jpg")}
          role="presentation"
          alt="presentation"
        />

        {/* marquee */}
        <div
          className={clsx(
            "bg-gradient-to-r gradient-decoration py-2 px-2",
            marquee
          )}
        >
          <span className="font-monument-extended p2 uppercase whitespace-nowrap tracking-[0.1em]">
            Interactive web design
          </span>
          <img
            src={require("~/assets/image/decoration/ball-white.png")}
            role="presentation"
            alt="presentation"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex justify-center items-center">
            {/* right hand */}
            <img
              className="w-48 absolute -translate-y-[90%] rotate-[-54deg]"
              src={require("~/assets/image/right-hand.png")}
              role="presentation"
              alt="presentation"
            />

            {/* left hand */}
            <img
              className="w-48 absolute translate-y-[90%] -scale-100 rotate-[48deg]"
              src={require("~/assets/image/left-hand.png")}
              role="presentation"
              alt="presentation"
            />

            {/* banner purple */}
            <img
              className="absolute translate-x-28 -translate-y-36 scale-75"
              src={require("~/assets/image/banner-purple.png")}
              role="presentation"
              alt="presentation"
            />

            {/* banner yellow */}
            <img
              className="absolute -translate-x-24 translate-y-full scale-75"
              src={require("~/assets/image/banner-yellow.png")}
              role="presentation"
              alt="presentation"
            />

            {/* title */}
            <div className="relative flex justify-center items-center w-[75vw]">
              <SVG
                className="w-full"
                src={require("~/assets/icon/dialog-strong.svg")}
              />
              <SVG
                className="w-11/12 absolute"
                src={require("~/assets/icon/title.svg")}
              />
              <h2 className="sr-only">互動式網頁設計</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section4() {
  return (
    <section
      className={clsx(
        section,
        "pt-40 pb-16 px-8",
        "items-center gap-12",
        "text-center"
      )}
    >
      <h2
        className={clsx(
          "ch h3 font-medium",
          "rounded-full",
          "text-secondary-1",
          "border-4 border-secondary-1",
          "shadow text-shadow green",
          "px-12 py-4",
          "relative"
        )}
      >
        {/* light big */}
        <img
          className="absolute right-0 bottom-full translate-x-4 w-12"
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

      <div className="ch p2">
        <div>各路廠商強強聯手</div>
        <div>共同設計出接地氣的</div>
        <div>網頁互動挑戰關卡</div>
      </div>

      <div className="grid w-full ch gap-12">
        {/* card 1 */}
        <div className={clsx(card, "p-4", "bg-white text-primary-3")}>
          <div className={badge}>
            <strong className="text-neutral-5"># 板塊設計</strong>
          </div>

          <div className="space-y-2">
            <h3 className="h4 font-bold uppercase">The F2E 活動網站設計</h3>
            <p className="p2 font-montserrat font-medium">視覺滾動</p>
          </div>

          <img
            src={require("~/assets/image/dashboard.png")}
            role="presentation"
            alt="presentation"
          />

          <div className="flex w-full justify-between items-center sub-title">
            <p className="text-primary-2 en">WEEK 1</p>

            <a href="/" className="flex items-center">
              <strong>查看關卡細節</strong>
              <SVG
                className="w-6"
                src={require("~/assets/icon/arrow-up-right.svg")}
              />
            </a>
          </div>
        </div>

        {/* card 2 */}
        <div className={clsx(card, "p-4", "bg-white text-primary-3")}>
          <div className={badge}>
            <strong className="text-neutral-5"># 凱鈿行動科技</strong>
          </div>

          <div className="space-y-2">
            <h3 className="h4 font-bold uppercase">今晚，我想來點點簽</h3>
            <p className="p2 font-montserrat font-medium">CANVAS</p>
          </div>

          <img
            src={require("~/assets/image/edit.png")}
            role="presentation"
            alt="presentation"
          />

          <div className="flex w-full justify-between items-center sub-title">
            <p className="text-primary-2 en">WEEK 2</p>

            <a href="/" className="flex items-center">
              <strong>查看關卡細節</strong>
              <SVG
                className="w-6"
                src={require("~/assets/icon/arrow-up-right.svg")}
              />
            </a>
          </div>
        </div>

        {/* card 3 */}
        <div className={clsx(card, "p-4", "bg-white text-primary-3")}>
          <div className={badge}>
            <strong className="text-neutral-5"># 鈦坦科技</strong>
          </div>

          <div className="space-y-2">
            <h3 className="h4 font-bold uppercase">Scrum 新手村</h3>
            <p className="p2 font-montserrat font-medium">JS Draggable</p>
          </div>

          <img
            src={require("~/assets/image/exchange.png")}
            role="presentation"
            alt="presentation"
          />

          <div className="flex w-full justify-between items-center sub-title">
            <p className="text-primary-2 en">WEEK 3</p>

            <a href="/" className="flex items-center">
              <strong>查看關卡細節</strong>
              <SVG
                className="w-6"
                src={require("~/assets/icon/arrow-up-right.svg")}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section5() {
  return (
    <section
      className={clsx(
        section,
        "mt-20 pt-16 pb-16 px-4",
        "items-center gap-12",
        "text-center",
        "bg-neutral-4"
      )}
    >
      <h2 className="ch h3 flex items-center">
        <img
          className="w-8 mr-2"
          src={require("~/assets/image/decoration/player.png")}
          role="presentation"
          alt="presentation"
        />
        <div className="flex items-center gap-4">
          <img
            src={require("~/assets/image/decoration/ball-white.png")}
            role="presentation"
            alt="presentation"
          />
          <img
            src={require("~/assets/image/decoration/ball-white.png")}
            role="presentation"
            alt="presentation"
          />
          <img
            src={require("~/assets/image/decoration/ball-white.png")}
            role="presentation"
            alt="presentation"
          />
        </div>
        <strong className="mx-4 whitespace-nowrap text-shadow white">
          活動說明
        </strong>

        <div className="flex items-center gap-4">
          <img
            src={require("~/assets/image/decoration/ball-white.png")}
            role="presentation"
            alt="presentation"
          />
          <img
            src={require("~/assets/image/decoration/ball-white.png")}
            role="presentation"
            alt="presentation"
          />
          <img
            src={require("~/assets/image/decoration/ball-white.png")}
            role="presentation"
            alt="presentation"
          />
        </div>
        <img
          className="ml-2"
          src={require("~/assets/image/decoration/ball-purple.png")}
          role="presentation"
          alt="presentation"
        />
      </h2>

      <div className="grid w-full gap-2">
        {/* card 1 */}
        <div className={clsx(card, "p-8", "border-4", "ch")}>
          <img
            className="w-20"
            src={require("~/assets/image/pencil.png")}
            role="presentation"
            alt="presentation"
          />
          <h3 className="font-bold">開放報名</h3>

          <div className="flex flex-col items-center gap-2">
            <time className="flex gap-2 p2">
              <span className="text-secondary-1">10/13</span>
              <span>(四) 早上 11:00</span>
            </time>
            <span>|</span>
            <time className="flex gap-2 p2">
              <span className="text-secondary-1">10/30</span>
              <span>(日) 晚上 23:59</span>
            </time>
          </div>

          <p className="p2 mt-2">截止前可修改報名組別</p>
        </div>

        {/* down icon */}
        <img
          className="mx-auto"
          src={require("~/assets/image/down.png")}
          role="presentation"
          alt="presentation"
        />

        {/* card 2 */}
        <div className={clsx(card, "p-8", "border-4", "ch")}>
          <img
            className="w-20"
            src={require("~/assets/image/clock.png")}
            role="presentation"
            alt="presentation"
          />
          <h3 className="font-bold">個組別開賽</h3>

          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-2 p2">
              <span className="text-secondary-1">10/31</span>
              <span>UI組、團體組開賽</span>
            </div>
            <div className="flex gap-2 p2">
              <span className="text-secondary-1">11/07</span>
              <span>前端組開賽</span>
            </div>
          </div>

          <p className="p2 mt-2">
            前端工程師可採用 UI 設計師的設計稿產出完整作品
          </p>
        </div>

        {/* down icon */}
        <img
          className="mx-auto"
          src={require("~/assets/image/down.png")}
          role="presentation"
          alt="presentation"
        />

        {/* card 3 */}
        <div className={clsx(card, "p-8", "border-4", "ch")}>
          <img
            className="w-20"
            src={require("~/assets/image/folder.png")}
            role="presentation"
            alt="presentation"
          />
          <h3 className="font-bold">登錄作品</h3>

          <div className="flex flex-col items-center gap-2">
            <time className="flex gap-2 p2">
              <span className="text-secondary-1">10/31</span>
              <span>(一) 中午 12:00</span>
            </time>
            <span>|</span>
            <time className="flex gap-2 p2">
              <span className="text-secondary-1">11/28</span>
              <span>(一) 中午 12:00</span>
            </time>
          </div>

          <p className="p2 mt-2">依賽程登錄作品</p>
        </div>

        {/* down icon */}
        <img
          className="mx-auto"
          src={require("~/assets/image/down.png")}
          role="presentation"
          alt="presentation"
        />

        {/* card 4 */}
        <div className={clsx(card, "p-8", "border-4", "ch")}>
          <img
            className="w-20"
            src={require("~/assets/image/play.png")}
            role="presentation"
            alt="presentation"
          />
          <h3 className="font-bold">線上直播</h3>

          <div className="flex flex-col items-center gap-2">
            <time className="flex gap-2 p2">
              <span className="text-secondary-1">11/03 - 11/24</span>
              <span>每週四</span>
            </time>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section6() {
  return (
    <section
      className={clsx(
        section,
        "ch",
        "mt-20 pt-16 pb-16 px-4",
        "items-center gap-12"
      )}
    >
      <header className="w-full space-y-4">
        <h2 className="h4 text-shadow white font-bold text-center">
          <div>區區修煉已經無法滿足了嗎？</div>
          <div>還有比賽等著你！</div>
        </h2>

        <div className="flex items-baseline justify-between border-b-4 pb-1">
          <img
            className="w-8"
            src={require("~/assets/image/decoration/flag.png")}
            role="presentation"
            alt="presentation"
          />

          <img
            className="w-20 translate-y-2"
            src={require("~/assets/image/decoration/car.png")}
            role="presentation"
            alt="presentation"
          />
        </div>
      </header>

      <div className="grid gap-6">
        <div className={clsx(card, "bg-neutral-3", "p-6", "glassy")}>
          <img
            src={require("~/assets/image/note.png")}
            role="presentation"
            alt="presentation"
          />

          <h3 className="text-primary-1 font-bold text-shadow purple">
            評審機制
          </h3>

          <div className="space-y-2 w-full">
            <strong className="h4">初選：</strong>
            <p className="p2">將由六角學院前端、UI 評審進行第一波篩選。</p>
          </div>

          <div className="space-y-2 w-full">
            <strong className="h4">決選：</strong>
            <p className="p2">
              由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
              由評審進行直播公布名單！
            </p>
          </div>
        </div>

        <div className={clsx(card, "bg-neutral-3", "p-6", "glassy")}>
          <img
            src={require("~/assets/image/coin.png")}
            role="presentation"
            alt="presentation"
          />

          <h3 className="text-primary-1 font-bold text-shadow purple">獎金</h3>

          <div className="space-y-2 w-full p2">
            <strong>初選佳作：</strong>
            <div className="space-x-2">
              <span>共六十位</span>
              <span className="text-secondary-1">數位獎狀</span>
            </div>
            <p className="p3 text-neutral-2">每週主題個人組十位、團體組十組</p>
          </div>
          <div className="space-y-2 w-full p2">
            <strong>個人企業獎：</strong>
            <div className="space-x-2">
              <span>共六位</span>
              <span className="text-secondary-1">NTD 3,000/位</span>
            </div>
            <p className="p3 text-neutral-2">每週主題個人組十位、團體組十組</p>
          </div>
          <div className="space-y-2 w-full p2">
            <strong>初選佳作：</strong>
            <div className="space-x-2">
              <span>共六十位</span>
              <span className="text-secondary-1">數位獎狀</span>
            </div>
            <p className="p3 text-neutral-2">每週主題個人組十位、團體組十組</p>
          </div>
          <div className="space-y-2 w-full p2">
            <strong>團體企業獎：</strong>
            <div className="space-x-2">
              <span>共三組 </span>
              <span className="text-secondary-1">NTD 10,000/組</span>
            </div>
            <p className="p3 text-neutral-2">每週主題各 1 組</p>
          </div>

          <p className="mt-2 p2 w-full">以上皆提供完賽數位獎狀</p>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <main className="s-full">
      {/* <Section1 /> */}
      {/* <Section2 /> */}
      {/* <Section3 /> */}
      {/* <Section4 /> */}
      {/* <Section5 /> */}
      <Section6 />
    </main>
  );
}
