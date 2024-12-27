import { PropsWithChildren } from "react";
import { Button, SectionHeader } from "../../components";
import {
  ManageFirstPreviewImage,
  ManageHeroImage,
  ManageSecondPreviewImage,
} from "../../images";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";

export function Manage() {
  return (
    <>
      <main className="max-w-screen-md lg:max-w-screen-xl px-8 pt-2 pb-4 md:px-10 lg:px-[5.25rem] lg:pt-0">
        <ManageHeroImage />
        <Section title="Manage">
          <p className="font-publicSans tracking-tight text-[0.95rem] leading-[1.875rem] text-left pt-[0.25rem] pr-2 pb-6 min-h-[11.75rem]">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </p>
          <p className="font-publicSans font-bold text-[0.805rem] text-slightly-desaturated-cyan py-[0.3rem]">
            Interaction Design / Front End Development
          </p>
          <p className="font-publicSans font-bold text-[0.805rem] text-slightly-desaturated-cyan py-[0.3rem]">
            HTML / CSS / JS
          </p>
          <Button variant="outlined" className="mt-6 mb-0 self-start">
            VISIT WEBSITE
          </Button>
        </Section>

        <section className="pt-11">
          <h1 className="font-ibarra text-[2rem]">Project Background</h1>
          <TextBlock>
            This project was a front-end challenge from Frontend Mentor. It's a
            platform that enables you to practice building websites to a design
            and project brief. Each challenge includes mobile and desktop
            designs to show how the website should look at different screen
            sizes. Creating these projects has helped me refine my workflow and
            solve real-world coding problems. I've learned semothing new with
            each project, helping me to improve and adapt my style.
          </TextBlock>
        </section>

        <section className="pt-3">
          <h1 className="font-ibarra text-[2rem] mb-10">Static Previews</h1>
          <div className="flex flex-col gap-8">
            <ManageFirstPreviewImage />
            <ManageSecondPreviewImage />
          </div>
        </section>
      </main>

      <ProjectNavigation />
      

      <section
        className={`flex flex-col md:flex-row mt-16 mb-20 px-8 md:justify-between md:items-center md:mt-2 md:mb-4 text-center`}
      >
        <span className="font-ibarra font-bold text-4xl tracking-tight md:w-[20.5rem] md:text-left md:mr-6 lg:mr-0">
          Interested in doing a project together?
        </span>
        <hr className="hidden md:block md:w-28 lg:w-[35rem] mt-8 mb-6 border-y-[0.25px] border-solid border-grayish-dark-blue/15" />
        <Button
          variant="outlined"
          className="mt-10 md:mt-0 self-center text-nowrap"
        >
          CONTACT ME
        </Button>
      </section>
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

type TextBlockProps = {
  className?: string;
}

function TextBlock({ children, className }: PropsWithChildren<TextBlockProps>) {
  return (
    <p className={`font-publicSans tracking-tight text-[0.95rem] leading-[1.875rem] text-left pt-6 pb-6 min-h-[11.75rem] ${className}`}>
      {children}
    </p>
  );
}

function ProjectNavigation() {
  return <nav className="flex w-full px-6 mt-12 ">
  <Link
    to={"/portfolio/fylo"}
    className="flex-1 border-black border-grayish-dark-blue/[.15] border-y-[1px]"
  >
    <img src={ArrowLeft} className="pt-[1.4rem] pb-4" />
    <p className="font-serif text-3xl">Fylo</p>
    <p className="font-sans tracking-wide pt-1 pb-6">Previous Project</p>
  </Link>
  <span className="border-l-[1px] border-grayish-dark-blue/[.15]"></span>
  <Link
    to={"/portfolio/bookmark"}
    className="flex-1 flex flex-col text-right border-grayish-dark-blue/[.15] border-solid border-y-[1px]"
  >
    <img src={ArrowRight} className="self-end pt-[1.4rem] pb-4" />
    <p className="font-serif text-3xl">Bookmark</p>
    <p className="font-sans tracking-wide pt-1 pb-6">Next Project</p>
  </Link>
</nav>
}
