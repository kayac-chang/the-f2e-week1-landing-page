import clsx from "clsx";
import Banner from "~/components/Banner";
import Issue from "~/components/Issue";
import Solution from "~/components/Solution";
import Information from "~/components/Information";
import Description from "~/components/Description";
import Award from "~/components/Award";
import { Pages, Page } from "~/components/FullPageScroll";
import { flex, section } from "~/styles/common";
import Question from "~/components/Question";

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
      <Page>
        <Award />
      </Page>
      <Page>
        <Question />
      </Page>
      {/* <Sponsors /> */}
    </Pages>
  );
}
