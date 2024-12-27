import { ContactMeSection } from "../ContactMeSection";
import { AboutMeSection } from "./AboutMeSection";
import { IntroductionSection } from "./IntroductionSection";
import { useScrollToTop } from "../../hooks";

function Home() {

  useScrollToTop();

  return (
    <>
      <main className="max-w-screen-md lg:max-w-screen-xl px-8 md:px-10 lg:px-[5.25rem] lg:pt-0">
        <IntroductionSection />
        <AboutMeSection />
        <ContactMeSection className="pt-[5.5rem] pb-20" />
      </main>
    </>
  );
}

export default Home;
