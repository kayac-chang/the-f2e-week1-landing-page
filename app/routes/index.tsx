import clsx from "clsx";
import SVG from "~/components/SVG";
import Tabs from "~/components/Tabs";
import Banner from "~/components/Banner";
import Issue from "~/components/Issue";
import Solution from "~/components/Solution";
import Information from "~/components/Information";
import { Pages, Page } from "~/components/FullPageScroll";
import { badge, card, flex, section } from "~/styles/common";
import Description from "~/components/Description";

function Section6() {
  return (
    <section
      className={clsx(
        section,
        "ch",
        "mt-20 px-4 pt-16 pb-16",
        "items-center gap-12"
      )}
    >
      <header className="w-full space-y-4">
        <h2 className="h4 text-shadow white text-center font-bold">
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

          <h3 className="text-shadow purple font-bold text-primary-1">
            評審機制
          </h3>

          <div className="w-full space-y-2">
            <strong className="h4">初選：</strong>
            <p className="p2">將由六角學院前端、UI 評審進行第一波篩選。</p>
          </div>

          <div className="w-full space-y-2">
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

          <h3 className="text-shadow purple font-bold text-primary-1">獎金</h3>

          <div className="p2 w-full space-y-2">
            <strong>初選佳作：</strong>
            <div className="space-x-2">
              <span>共六十位</span>
              <span className="text-secondary-1">數位獎狀</span>
            </div>
            <p className="p3 text-neutral-2">每週主題個人組十位、團體組十組</p>
          </div>
          <div className="p2 w-full space-y-2">
            <strong>個人企業獎：</strong>
            <div className="space-x-2">
              <span>共六位</span>
              <span className="text-secondary-1">NTD 3,000/位</span>
            </div>
            <p className="p3 text-neutral-2">每週主題個人組十位、團體組十組</p>
          </div>
          <div className="p2 w-full space-y-2">
            <strong>初選佳作：</strong>
            <div className="space-x-2">
              <span>共六十位</span>
              <span className="text-secondary-1">數位獎狀</span>
            </div>
            <p className="p3 text-neutral-2">每週主題個人組十位、團體組十組</p>
          </div>
          <div className="p2 w-full space-y-2">
            <strong>團體企業獎：</strong>
            <div className="space-x-2">
              <span>共三組 </span>
              <span className="text-secondary-1">NTD 10,000/組</span>
            </div>
            <p className="p3 text-neutral-2">每週主題各 1 組</p>
          </div>

          <p className="p2 mt-2 w-full">以上皆提供完賽數位獎狀</p>
        </div>
      </div>
    </section>
  );
}

const tab = clsx(
  "relative",
  "aria-!selected:text-neutral-2",
  "aria-!selected:after:hidden",
  "after:block",
  "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2",
  "after:h-1.5 after:w-5 after:rounded-3xl",
  "shadow-secondary-1 after:bg-secondary-1 after:shadow",
  "[&>*]:aria-selected:text-shadow [&>*]:aria-selected:shadow-white"
);

const panel = clsx(
  card,
  "bg-white text-neutral-5",
  "gap-10 p-6",
  "[&_[data-index]]:text-primary-3",
  "[&_[data-index]]:en",
  "[&_[data-index]]:text-en-h4",
  "[&_h3]:text-ch-h4",
  "[&_h3]:font-bold",
  "[&_p]:text-ch-p2",
  "[&_p]:mt-4"
);

function Section7() {
  return (
    <section
      className={clsx(section, "ch", "px-4 pt-20 pb-16", "items-center gap-12")}
    >
      <h2 className="en h3 text-shadow text-center shadow-white">Q&A</h2>

      <Tabs.Root className="w-full space-y-6">
        <Tabs.List
          className={clsx(
            flex.nowrap,
            "p2",
            "gap-6",
            "overflow-scroll",
            "[&>*]:py-4"
          )}
        >
          <Tabs.Tab className={tab} value="common">
            <span>常見問題</span>
          </Tabs.Tab>
          <Tabs.Tab className={tab} value="ui">
            <span>UI 設計師常見問題</span>
          </Tabs.Tab>
          <Tabs.Tab className={tab} value="frontend">
            <span>前端工程師常見問題</span>
          </Tabs.Tab>
          <Tabs.Tab className={tab} value="group">
            <span>團體組常見問題</span>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="common" className={panel}>
          <section>
            <div data-index>Q1</div>
            <h3>如果某一週不想新挑戰失敗，是否能再繼續挑戰後面關卡？</h3>
            <p>
              可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。
            </p>
          </section>
          <section>
            <div data-index>Q2</div>
            <h3>大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作業</h3>
            <p>
              這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。
            </p>
          </section>
          <section>
            <div data-index>Q3</div>
            <h3>
              我不確定自己的版型有沒有符合過關門檻，要寫到什麼程度才有過關門檻？
            </h3>
            <p>
              主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。
            </p>
          </section>
          <section>
            <div data-index>Q4</div>
            <h3>我已經寫到一半了，但時間快來不及，可以先投稿嗎？</h3>
            <p>可以，有投稿表示你還會持續努力在這次活動上。</p>
          </section>

          <Tabs.List className={clsx(flex.row_center, "w-full")}>
            <Tabs.Tab
              value="ui"
              className={clsx(flex.row_center, "ml-auto", "text-primary-3")}
            >
              <strong className="ch h5">
                <div>UI 設計師</div>
                <div>常見問題</div>
              </strong>
              <SVG
                className="w-8"
                src={require("~/assets/icon/carot-right.svg")}
              />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.Panel>

        <Tabs.Panel value="ui" className={panel}>
          <section>
            <div data-index>Q1</div>
            <h3>
              到時候投稿的平台是提供什麼呢？我也不像是工程師可以有Codepen 上傳
            </h3>
            <p>
              其中投稿的欄位裡面會有一個「線上標示文件」，像是 Adobe XD
              便有提供該服務(範例連結)，屆時提供標示文件後，便可讓其他前端工程師採用你的設計稿來開發。
            </p>
          </section>
          <section>
            <div data-index>Q2</div>
            <h3>
              投稿上去的 UI 作品，我知道需要授權讓前端工程師組做成 Web
              介面，那授權部分可以設定嗎？
            </h3>
            <p>
              會有的，屆時平台投稿流程上，會讓您的作品可以選擇 CC0、CC BY
              等授權，以保障您的 UI 作品權益。
            </p>
          </section>
          <section>
            <div data-index>Q3</div>
            <h3>一定要上傳「線上標示文件」嗎？</h3>
            <p>
              是的，因為這樣才有辦法讓其他前端工程師，能採用您的設計稿，將您的設計稿實作出網頁格式。如果您是使用
              Sketch，也可使用 Sketch Measure 編譯出來後，壓縮 ZIP 到雲端空間
              (Dropbox、Google Drive)。
            </p>
          </section>
          <section>
            <div data-index>Q4</div>
            <h3>不能使用 PS、Illustrator 設計嗎？</h3>
            <p>
              可以，團隊在協作過程中，一定也會先出些進度提供前端切版，有進度時您也可以先投稿，讓前端工程師可以先接手，之後再透過
              FB 社團來溝通進度即可。
            </p>
          </section>

          <Tabs.List className={clsx(flex.row_center, "w-full")}>
            <Tabs.Tab
              value="common"
              className={clsx(flex.row_center, "text-primary-3")}
            >
              <SVG
                className="w-8"
                src={require("~/assets/icon/carot-left.svg")}
              />
              <strong className="ch h5">
                <div>常見問題</div>
              </strong>
            </Tabs.Tab>
            <Tabs.Tab
              value="frontend"
              className={clsx(flex.row_center, "ml-auto", "text-primary-3")}
            >
              <strong className="ch h5">
                <div>前端工程師</div>
                <div>常見問題</div>
              </strong>
              <SVG
                className="w-8"
                src={require("~/assets/icon/carot-right.svg")}
              />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.Panel>

        <Tabs.Panel value="frontend" className={panel}>
          <section>
            <div data-index>Q1</div>
            <h3>
              我可以不依照設計稿，自己做版面嗎？因為我自己想多練習js / 後端
            </h3>
            <p>
              可以，The F2E
              活動是希望讓大家人人有功練，所以依照你自己想投入的方向練功即可。CSS
              也可以用框架，例如 Bootstrap。
            </p>
          </section>
          <section>
            <div data-index>Q2</div>
            <h3>前端介面一定要長得一模一樣嗎？</h3>
            <p>不用，依照自己的想法來開發也可以</p>
          </section>
          <section>
            <div data-index>Q3</div>
            <h3>有現成的網頁靜態頁面嗎？我想只練習 JS / 後端就好</h3>
            <p>
              這段我們不會提供，畢竟每個人習慣的 Coding style 又不一樣，產出的
              HTML、CSS 並非是自己習慣的 Layout 反而會更花時間。
            </p>
          </section>
          <section>
            <div data-index>Q4</div>
            <h3>
              那我只想要練習 JS，HTML / CSS 我用陽春版，不依照設計稿開發可以嗎？
            </h3>
            <p>
              只要您能找到 PS 或 Illustrator
              產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。
            </p>
          </section>
          <section>
            <div data-index>Q5</div>
            <h3>當每週一題目出來後，我有一些設計進度也可以先投稿嗎？</h3>
            <p>
              可以，你可以當做我們就是出一個主題，你依照那主題當作參考方向來開發即可。
            </p>
          </section>

          <Tabs.List className={clsx(flex.row_center, "w-full")}>
            <Tabs.Tab
              value="ui"
              className={clsx(flex.row_center, "text-primary-3")}
            >
              <SVG
                className="w-8"
                src={require("~/assets/icon/carot-left.svg")}
              />
              <strong className="ch h5">
                <div>UI 設計師</div>
                <div>常見問題</div>
              </strong>
            </Tabs.Tab>
            <Tabs.Tab
              value="group"
              className={clsx(flex.row_center, "ml-auto", "text-primary-3")}
            >
              <strong className="ch h5">
                <div>團體組</div>
                <div>常見問題</div>
              </strong>
              <SVG
                className="w-8"
                src={require("~/assets/icon/carot-right.svg")}
              />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.Panel>

        <Tabs.Panel value="group" className={panel}>
          <section>
            <div data-index>Q1</div>
            <h3>請問團體組最多幾人？</h3>
            <p>最多 4 人，投稿作品時請派一位組長來投稿即可。</p>
          </section>
          <section>
            <div data-index>Q2</div>
            <h3>我對獎項有興趣，可以只做第三道主題就好嗎？</h3>
            <p>
              可以，您可以在這場活動中，和組員一起打磨第三道主題，不用三個主題都做。
            </p>
          </section>
          <section>
            <div data-index>Q3</div>
            <h3>那團體第三道主題最晚投稿期限為？</h3>
            <p>
              團體組投稿第三週 UI 最晚投稿時間為 11/21(一) 中午 12
              點，前端最晚投稿期限為 11/28(一) 中午 12 點。
            </p>
          </section>
          <section>
            <div data-index>Q4</div>
            <h3>
              我們團體組比較想做手機 APP ，可以投稿並符合並符合評審門檻嗎？
            </h3>
            <p>
              您可以開發手機
              APP，若有在期限前投稿也能獲得數位獎狀。但評審門檻僅限 Web
              瀏覽器應用開發，Android、iOS APP
              則不在評審範圍內，故不符合評審門檻。
            </p>
          </section>
          <section>
            <div data-index>Q5</div>
            <h3>
              請問除了前端開發、 UI
              設計外，還能做其他加值應用嗎？例如後端動態應用整合？
            </h3>
            <p>
              可以的，只要能透過網頁瀏覽器操控您的服務，並有使用到 TDX API
              的任何一個
              API，您可以依照本次主題「全台公車動態時刻查詢應用服務」做最大的加值整合應用，甚至搭配後端應用，整合多個外部
              API 也是可以的。
            </p>
          </section>
          <section>
            <div data-index>Q6</div>
            <h3>
              團體組的 UI 設計稿，可以讓『個人組 - 前端工程師』組別採用嗎？
            </h3>
            <p>不能，預設是不能讓『個人組-前端工程師』採用。</p>
          </section>

          <Tabs.List className={clsx(flex.row_center, "w-full")}>
            <Tabs.Tab
              value="frontend"
              className={clsx(flex.row_center, "text-primary-3")}
            >
              <SVG
                className="w-8"
                src={require("~/assets/icon/carot-left.svg")}
              />
              <strong className="ch h5">
                <div>前端工程師</div>
                <div>常見問題</div>
              </strong>
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.Panel>
      </Tabs.Root>

      <div>
        <button className="button yellow ch h5 px-10 py-3 font-bold">
          立即報名
        </button>
      </div>
    </section>
  );
}

function Sponsors() {
  return (
    <section
      className={clsx(
        section,
        "!min-h-0",
        "bg-neutral-3",
        "text-center",
        flex.col_center,
        "gap-8",
        "mt-20 px-8 py-16"
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
        <div className="en h3 uppercase">Sponsors</div>
        <div className="ch h4 font-bold">鑽石級贊助商</div>
      </h2>

      <ul className={clsx(flex.col_center, "gap-4")}>
        <li>
          <div>
            <img
              src={require("~/assets/sponsor/block-studio-default.png")}
              alt="block studio"
            />
          </div>
        </li>
        <li>
          <div>
            <img
              src={require("~/assets/sponsor/kdan-default.png")}
              alt="kdan"
            />
          </div>
        </li>
        <li>
          <div>
            <img
              src={require("~/assets/sponsor/titansoft-default.png")}
              alt="titansoft"
            />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default function Index() {
  return (
    <Pages as="main" className="flex-1 overflow-hidden">
      <Page>
        <Banner />
      </Page>
      <Page>
        <Issue />
      </Page>
      <Page>
        <Solution />
      </Page>
      <Page>
        <Information />
      </Page>
      <Page>
        <Description />
      </Page>

      {/* <Section6 /> */}
      {/* <Section7 /> */}
      {/* <Sponsors /> */}
    </Pages>
  );
}
