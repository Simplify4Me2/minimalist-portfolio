import { PropsWithChildren } from "react";
import {
  PortfolioNavigation,
  ArticleHeader,
  TextBlock,
  ProjectLink,
} from "../../components";
import {
  ManageFirstPreviewImage,
  ManageHeroImage,
  ManageSecondPreviewImage,
} from "../../images";
import { ContactSection } from "../ContactSection";

export function Manage() {
  return (
    <>
      <main className="max-w-screen-md lg:max-w-screen-xl px-8 md:px-10 lg:px-[5.25rem] pt-2 lg:pt-12">
        <ManageHeroImage />

        <section className="mt-10 lg:mt-28 lg:grid lg:grid-cols-[22rem_auto] lg:gap-[7.5rem]">
          <Article title="Manage" className="pr-1">
            <TextBlock
              fontSize="[0.95rem]"
              tracking="tight"
              className="opacity-80"
            >
              This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              testimonial slider.
            </TextBlock>
            <Tags classname="mb-0 lg:mb-3">
              Interaction Design / Front End Development
            </Tags>
            <Tags classname="mb-6 lg:mb-7">HTML / CSS / JS</Tags>
            <ProjectLink to="manage">VISIT WEBSITE</ProjectLink>
          </Article>
          <section className="basis-lg lg:pl-1">
            <article>
              <h2 className="font-ibarra font-medium text-[2rem] tracking-tight pt-12 lg:pt-0">
                Project Background
              </h2>
              <TextBlock
                tracking="tight"
                fontSize="[0.95rem]"
                className="lg:pr-1 opacity-80"
              >
                This project was a front-end challenge from Frontend Mentor.
                It's a platform that enables you to practice building websites
                to a design and project brief. Each challenge includes mobile
                and desktop designs to show how the website should look at
                different screen sizes. Creating these projects has helped me
                refine my workflow and solve real-world coding problems. I've
                learned something new with each project, helping me to improve
                and adapt my style.
              </TextBlock>
            </article>
            <article className="pt-3">
              <div>
                <h2 className="font-ibarra font-medium text-[2rem] tracking-tight mb-10 lg:mb-6">
                  Static Previews
                </h2>
                <div className="flex flex-col gap-8">
                  <ManageFirstPreviewImage />
                  <ManageSecondPreviewImage />
                </div>
              </div>
            </article>
          </section>
        </section>
      </main>
      <PortfolioNavigation
        previousProject="Fylo"
        previousProjectLink="/portfolio/fylo"
        nextProject="Bookmark"
        nextProjectLink="/portfolio/bookmark"
      />
      <ContactSection className="mt-16 mb-20 px-8" />
    </>
  );
}

function Tags({
  children,
  classname,
}: PropsWithChildren<{ classname?: string }>) {
  return (
    <p
      className={`font-publicSans font-bold text-[0.805rem] lg:text-base text-slightly-desaturated-cyan py-[0.3rem] ${classname}`}
    >
      {children}
    </p>
  );
}

export function Article({
  title,
  children,
  className,
}: PropsWithChildren<{ title: string; className?: string }>) {
  return (
    <article className={`flex lg:items-center ${className}`}>
      <div className="flex flex-col h-full justify-start lg:pb-7 pt-6 lg:pt-12 md:my-0 md:ml-[4.25rem] lg:ml-0 border-y-[0.25px] border-solid border-grayish-dark-blue/15">
        <ArticleHeader className="pb-1">{title}</ArticleHeader>
        {children}
      </div>
    </article>
  );
}
