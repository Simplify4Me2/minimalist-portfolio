import { PropsWithChildren } from "react";
import {
  PortfolioNavigation,
  TextBlock,
  Tags,
  ProjectLink,
  ProjectBackground,
  StaticPreviews,
  ArticleHeader,
} from "../../components";
import {
  BookmarkFirstPreviewImage,
  BookmarkHeroImage,
  BookmarkSecondPreviewImage,
} from "../../images";
import { ContactSection } from "../ContactSection";

export function Bookmark() {
  return (
    <>
      <main className="max-w-screen-md lg:max-w-screen-xl px-8 md:px-10 lg:px-[5.25rem] pt-2 md:pt-12">
        <BookmarkHeroImage />

        <section className="mt-10 lg:mt-28 lg:grid lg:grid-cols-[22rem_auto] lg:gap-[7.5rem]">
          <Article className="pr-1 items-start">
            <ArticleHeader className="pb-1">Bookmark</ArticleHeader>
            <TextBlock
              fontSize="[0.95rem]"
              tracking="tight"
              className="opacity-80"
            >
              This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              features section.
            </TextBlock>
            <Tags classname="mb-0 lg:mb-3">
              Interaction Design / Front End Development
            </Tags>
            <Tags classname="mb-6 lg:mb-7">HTML / CSS / JS</Tags>
            <ProjectLink to="bookmark">VISIT WEBSITE</ProjectLink>
          </Article>

          <section className="basis-lg lg:pl-1">
            <ProjectBackground>
              This project was a front-end challenge from Frontend Mentor. It's
              a platform that enables you to practice building websites to a
              design and project brief. Each challenge includes mobile and
              desktop designs to show how the website should look at different
              screen sizes. Creating these projects has helped me refine my
              workflow and solve real-world coding problems. I've learned
              something new with each project, helping me to improve and adapt
              my style.
            </ProjectBackground>
            <StaticPreviews>
              <BookmarkFirstPreviewImage />
              <BookmarkSecondPreviewImage />
            </StaticPreviews>
          </section>
        </section>
      </main>

      <PortfolioNavigation
        previousProject="Manage"
        previousProjectLink="/portfolio/manage"
        nextProject="Insure"
        nextProjectLink="/portfolio/insure"
      />

      <ContactSection className="mt-16 mb-20 lg:mb-[9.5rem] px-8 lg:px-0" />
    </>
  );
}

function Article({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <article className={`flex ${className}`}>
      <div className="flex flex-col flex-1 justify-start lg:pb-7 pt-6 md:pt-8 lg:pt-12 border-y-[0.25px] border-solid border-grayish-dark-blue/15">
        {children}
      </div>
    </article>
  );
}
