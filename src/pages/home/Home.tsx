import { Button } from "../../components";
import HomepageMobileImage from "./../../assets/homepage/mobile/image-homepage-hero.jpg";
import HomepageTabletImage from "./../../assets/homepage/tablet/image-homepage-hero.jpg";
import HomepageDesktopImage from "./../../assets/homepage/desktop/image-homepage-hero.jpg";
import ProfileMobileImage from "./../../assets/homepage/mobile/image-homepage-profile.jpg";
import ProfileTabletImage from "./../../assets/homepage/tablet/image-homepage-profile.jpg";
import ProfileDesktopImage from "./../../assets/homepage/desktop/image-homepage-profile.jpg";
import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { ContactMeSection } from "./ContactMeSection";

export function Home() {
  return (
    <>
      <Header />
      <main className="max-w-screen-md lg:max-w-screen-xl px-8 md:px-10 lg:px-[5.25rem] lg:pt-0">
        <section className="flex flex-col pt-2 md:pt-0 pb-[5.5rem] relative lg:pt-[0.3rem]">
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
          {/* <div className="md:absolute md:bg-very-light-grey md:bottom-[5.5rem] md:w-3/4 lg:w-2/5 md:h-[17.5rem] lg:h-[22.5rem] lg:flex lg:flex-col lg:justify-end">
            <h1 className="font-ibarra font-bold text-4xl tracking-tight pt-6 pb-[1.85rem] md:w-3/4 lg:text-[3.1rem] lg:leading-[3.1rem] lg:w-[24.5rem] lg:pt-16 lg:pb-14 lg:tracking-normal">
              Hey, I&rsquo;m Alex Spencer and I love building beautiful websites
            </h1>
            <Button variant="contained">ABOUT ME</Button>
          </div> */}
          <div className="flex flex-col justify-end bg-very-light-grey md:absolute md:bottom-[5.5rem] md:w-3/4 lg:w-2/5 md:h-[17.5rem] lg:h-[22.5rem]">
            <h1 className="font-ibarra font-bold text-4xl tracking-tight grow pt-6 md:pt-14 pb-[1.85rem] max-w-md md:w-3/4 lg:text-[3.1rem] lg:leading-[3.1rem] lg:w-[24.5rem] lg:pt-16 lg:pb-14 lg:tracking-normal">
              Hey, I&rsquo;m Alex Spencer and I love building beautiful websites
            </h1>
            <Button variant="contained">ABOUT ME</Button>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row lg:justify-between pt-2 pb-[3.3rem lg:pt-16">
          <img
            src={ProfileMobileImage}
            alt="homepage image"
            className="md:hidden"
          />
          <img
            src={ProfileTabletImage}
            alt="homepage image"
            className="hidden md:block lg:hidden"
          />
          <img
            src={ProfileDesktopImage}
            alt="homepage image"
            className="hidden lg:block"
          />
          <div className="border-y-[0.25px] border-solid border-grayish-dark-blue/15  my-8 pt-8 pb-12 lg:flex lg:flex-col lg:mx-20 lg:mb-0 lg:pt-12 lg:pb-0 lg:mt-0 lg:w-[22.5rem]">
            <h1 className="font-ibarra font-bold text-4xl tracking-tight pb-6">
              About Me
            </h1>
            <p className="font-publicSans leading-[1.875rem] text-left pt-[0.25rem] pb-1.5 min-h-[11.75rem]">
              I'm a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I'm based in London, UK, but I'm happy working
              remotely and have experience in remote teams. When I'm not coding,
              you'll find me outdoors. I love being out in nature whether that's
              going for a walk, run or cycling. I'd love you to check out my
              work.
            </p>
            <Button variant="outlined" className="mt-4 self-start">
              GO TO PORTFOLIO
            </Button>
          </div>
        </section>
        <ContactMeSection className={"pt-[5.5rem] pb-20"} />
      </main>
      <Footer />
    </>
  );
}
