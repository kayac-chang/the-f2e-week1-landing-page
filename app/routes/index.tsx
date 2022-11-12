import Banner from "~/components/Banner";
import Issue from "~/components/Issue";
import Solution from "~/components/Solution";
import Information from "~/components/Information";
import Description from "~/components/Description";
import Award from "~/components/Award";
import Question from "~/components/Question";
import Sponsors from "~/components/Sponsors";
import { Pages, Page } from "~/components/FullPageScroll";

export default function Index() {
  return (
    <Pages as="main" className="flex-1 overflow-hidden">
      {/* <Page> */}
      {/*   <Banner /> */}
      {/* </Page> */}
      {/* <Page> */}
      {/*   <Issue /> */}
      {/* </Page> */}
      {/* <Page> */}
      {/*   <Solution /> */}
      {/* </Page> */}
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
      <Page>
        <Sponsors />
      </Page>
    </Pages>
  );
}
