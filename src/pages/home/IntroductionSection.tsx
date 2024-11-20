import HomepageMobileImage from "./../../assets/homepage/mobile/image-homepage-hero.jpg";
import HomepageTabletImage from "./../../assets/homepage/tablet/image-homepage-hero.jpg";
import HomepageDesktopImage from "./../../assets/homepage/desktop/image-homepage-hero.jpg";
import { Button, SectionHeader } from "../../components";

export function IntroductionSection() {
  return (
    <section className="flex flex-col pt-2 md:pt-0 pb-[5.5rem] relative lg:pt-[0.3rem]">
      <HomePageImage />
      <div className="flex flex-col justify-end bg-very-light-grey md:absolute md:bottom-[5.5rem] md:w-3/4 lg:w-2/5 md:h-[17.5rem] lg:h-[22.5rem]">
        <SectionHeader className="grow pt-6 md:pt-14 pb-[1.85rem] max-w-md md:w-3/4 lg:text-[3.1rem] lg:leading-[3.1rem] lg:w-[24.5rem] lg:pt-16 lg:pb-14 lg:tracking-normal">
          Hey, I&rsquo;m Alex Spencer and I love building beautiful websites
        </SectionHeader>
        <Button variant="contained">ABOUT ME</Button>
      </div>
    </section>
  );
}

function HomePageImage() {
  return (
    <>
      <img
        src={HomepageMobileImage}
        alt="homepage image"
        className="md:hidden"
      />
      <img
        src={HomepageTabletImage}
        alt="homepage image"
        className="hidden md:block lg:hidden"
      />
      <img
        src={HomepageDesktopImage}
        alt="homepage image"
        className="hidden lg:block"
      />
    </>
  );
}
