import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { ContactMeSection } from "./ContactMeSection";
import { AboutMeSection } from "./AboutMeSection";
import { IntroductionSection } from "./IntroductionSection";

export function Home() {
  return (
    <>
      <Header />
      <main className="max-w-screen-md lg:max-w-screen-xl px-8 md:px-10 lg:px-[5.25rem] lg:pt-0">
        <IntroductionSection />
        <AboutMeSection />
        <ContactMeSection className="pt-[5.5rem] pb-20" />
      </main>
      <Footer />
    </>
  );
}
