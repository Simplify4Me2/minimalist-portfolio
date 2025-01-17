import { ContactSection } from "../ContactSection";
import { useScrollToTop } from "../../hooks";
import { HomepageHeroImage, ProfileImage } from "../../images";
import { Button, SectionHeader, TextBlock } from "../../components";
import { useNavigate } from "react-router-dom";

function Home() {
  useScrollToTop();
  const navigate = useNavigate();

  return (
    <>
      <main className="max-w-screen-md lg:max-w-screen-xl px-8 md:px-10 lg:px-[5.25rem] lg:pt-0">
        <section className="flex flex-col pt-2 md:pt-0 pb-[5.5rem] relative lg:pt-[0.3rem]">
          <HomepageHeroImage />
          <div className="flex flex-col justify-end bg-very-light-grey md:absolute md:bottom-[5.5rem] md:w-3/4 lg:w-2/5 md:h-[17.5rem] lg:h-[22.5rem]">
            <SectionHeader className="grow pt-6 md:pt-14 pb-[1.85rem] max-w-md md:w-3/4 lg:text-[3.1rem] lg:leading-[3.1rem] lg:w-[24.5rem] lg:pt-16 lg:pb-14 lg:tracking-normal">
              Hey, I&rsquo;m Alex Spencer and I love building beautiful websites
            </SectionHeader>
            <Button variant="contained-with-down-arrow">ABOUT ME</Button>
          </div>
        </section>
        <section
          className={`flex flex-col md:flex-row lg:justify-between pt-2 lg:pt-16`}
        >
          <ProfileImage />
          <div className="flex flex-col border-y-[0.25px] border-solid border-grayish-dark-blue/15 my-8 pt-8 md:pt-12 pb-12 md:my-0 md:ml-[4.25rem] lg:mx-20 lg:pt-12 lg:w-[22.5rem]">
            <SectionHeader className="pb-1">About Me</SectionHeader>
            <TextBlock>
              I'm a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I'm based in London, UK, but I'm happy working
              remotely and have experience in remote teams. When I'm not coding,
              you'll find me outdoors. I love being out in nature whether that's
              going for a walk, run or cycling. I'd love you to check out my
              work.
            </TextBlock>
            <Button
              variant="outlined"
              className="self-start"
              onClick={() => navigate("/portfolio")}
            >
              GO TO PORTFOLIO
            </Button>
          </div>
        </section>
        <ContactSection className="pt-[5.5rem] pb-20" />
      </main>
    </>
  );
}

export default Home;
