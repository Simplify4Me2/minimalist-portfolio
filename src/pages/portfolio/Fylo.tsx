import { PropsWithChildren } from "react";
import {
  Button,
  TextBlock,
  PortfolioNavigation,
  SectionHeader,
} from "../../components";
import {
  FyloHeroImage,
  FyloFirstPreviewImage,
  FyloSecondPreviewImage,
} from "../../images";
import { ContactMeSection } from "../ContactMeSection";

export function Fylo() {
  return (
    <>
      <main className="max-w-screen-md lg:max-w-screen-xl px-8 pt-2 pb-4 md:px-10 lg:px-[5.25rem] lg:pt-0">
        <FyloHeroImage />
        <Section title="Fylo">
          <p className="font-publicSans tracking-tight text-[0.95rem] leading-[1.875rem] text-left pt-[0.25rem] pb-6 min-h-[11.75rem]">
            This project was built in pure HTML and CSS. I had mobile and
            desktop designs to work to and built it so that it was
            fully&#8209;responsive. I took a mobile&#8209;first approach and
            used modern CSS like Flexbox and Grid for layout purposes.
          </p>
          <p className="font-publicSans font-bold text-[0.805rem] text-slightly-desaturated-cyan py-[0.3rem]">
            Interaction Design / Front End Development
          </p>
          <p className="font-publicSans font-bold text-[0.805rem] text-slightly-desaturated-cyan py-[0.3rem]">
            HTML / CSS
          </p>
          <Button variant="outlined" className="mt-6 mb-0 self-start">
            VISIT WEBSITE
          </Button>
        </Section>

        <section className="pt-11">
          <h1 className="font-ibarra text-[2rem]">Project Background</h1>
          <TextBlock tracking="tight" fontSize="[0.95rem]">
            This project was a front-end challenge from Frontend Mentor. It's a
            platform that enables you to practice building websites to a design
            and project brief. Each challenge includes mobile and desktop
            designs to show how the website should look at different screen
            sizes. Creating these projects has helped me refine my workflow and
            solve real-world coding problems. I've learned something new with
            each project, helping me to improve and adapt my style.
          </TextBlock>
        </section>

        <section className="pt-3">
          <h1 className="font-ibarra text-[2rem] mb-10">Static Previews</h1>
          <div className="flex flex-col gap-8">
            <FyloFirstPreviewImage />
            <FyloSecondPreviewImage />
          </div>
        </section>
      </main>

      <PortfolioNavigation
        previousProject="Insure"
        previousProjectLink="/portfolio/insure"
        nextProject="Manage"
        nextProjectLink="/portfolio/manage"
      />
      <ContactMeSection className="mt-16 mb-20 px-8" />
    </>
  );
}

interface SectionProps {
  title: string;
  className?: string;
}

function Section({
  title,
  children,
  className,
}: PropsWithChildren<SectionProps>) {
  return (
    <section
      className={`flex flex-col md:flex-row lg:justify-between pt-10 lg:pt-16 ${className}`}
    >
      <div className="flex flex-col border-y-[0.25px] border-solid border-grayish-dark-blue/15 pt-6 md:pt-12 pb-7 md:my-0 md:ml-[4.25rem] lg:mx-20 lg:pt-12 lg:w-[22.5rem]">
        <SectionHeader className="pb-5">{title}</SectionHeader>
        {children}
      </div>
    </section>
  );
}
