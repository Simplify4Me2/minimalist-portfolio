import { Button } from "../components";
import HomepageMobileImage from "./../assets/homepage/mobile/image-homepage-hero.jpg";
import HomepageTabletImage from "./../assets/homepage/tablet/image-homepage-hero.jpg";
import HomepageDesktopImage from "./../assets/homepage/desktop/image-homepage-hero.jpg";
import ProfileImage from "./../assets/homepage/mobile/image-homepage-profile.jpg";
import DownArrowsIcon from "./../assets/icons/down-arrows.svg";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { PropsWithChildren } from "react";

export function Home() {
  return (
    <>
      <Header />
      <main className="px-8 lg:px-[5.25rem] lg:pt-0">
        <section className="flex flex-col pt-2 pb-[5.5rem] relative">
          <HomePageImage />
          <div className="md:absolute md:bg-very-light-grey md:bottom-6 md:w-3/4 lg:w-2/5 lg:h-[22.5rem] lg:flex lg:flex-col lg:justify-end">
            <h1 className="font-ibarra font-bold text-4xl tracking-tight pt-6 pb-[1.85rem] md:w-3/4 lg:text-[3.1rem] lg:leading-[3rem] lg:w-[24.5rem] lg:py-16">
              Hey, I&rsquo;m Alex Spencer and I love building beautiful websites
            </h1>
            <button className="flex items-center h-12 w-[12.5rem] bg-dark-blue">
              <img src={DownArrowsIcon} className="h-full p-4 bg-dark-blue" />
              <p className="font-publicSans w-full text-white text-xs font-extralight tracking-[0.15rem]">
                ABOUT ME
              </p>
            </button>
          </div>
        </section>
        <Section imageSrc={ProfileImage} title="About Me">
          <p className="font-publicSans leading-[1.875rem] text-left pt-[0.25rem] pb-1.5 min-h-[11.75rem]">
            I'm a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I'm based in London, UK, but I'm happy working remotely
            and have experience in remote teams. When I'm not coding, you'll
            find me outdoors. I love being out in nature whether that's going
            for a walk, run or cycling. I'd love you to check out my work.
          </p>
          <Button variant="outlined" className="mt-4 self-start">
            GO TO PORTFOLIO
          </Button>
        </Section>
        <ContactMeSection />
      </main>
      <Footer />
    </>
  );
}

type SectionProps = {
  title: string;
  imageSrc: string;
};

function Section({
  children,
  imageSrc,
  title,
}: PropsWithChildren<SectionProps>) {
  return (
    <section className="flex flex-col pt-2 pb-[3.3rem] border-b-[0.25px] border-solid border-light-grey">
      <img src={imageSrc} />
      <hr className="my-8 border-y-[0.25px] border-solid border-light-grey" />
      <h1 className="font-ibarra font-bold text-4xl tracking-tight pb-6">
        {title}
      </h1>
      {children}
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

function ContactMeSection() {
  return (
    <section className="flex flex-col text-center pt-[7.2rem] pb-20">
      <span className="font-ibarra font-bold text-4xl tracking-tight">
        Interested in doing a project together?
      </span>
      <Button variant="outlined" className="mt-10 self-center">
        CONTACT ME
      </Button>
    </section>
  );
}
