import { Section, ProjectLink, ArticleHeader } from "../../components";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import {
  BookmarkImage,
  InsureImage,
  FyloImage,
  ManageImage,
} from "../../images";
import { PropsWithChildren } from "react";
import { ContactSection } from "../ContactSection";

function Overview() {
  useScrollToTop();

  return (
    <main className="max-w-screen-md lg:max-w-screen-xl px-8 md:px-10 lg:px-[5.25rem] lg:pt-12">
      <Section className="my-2 md:my-8 lg:mt-0 gap-8">
        <ManageImage />
        <Article title="Manage" className="pt-0 lg:pt-4 lg:px-4">
          <TextBlock className="pb-6 pr-2 md:pb-10">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </TextBlock>
          <ProjectLink to="manage">VIEW PROJECT</ProjectLink>
        </Article>
      </Section>

      <Section className="mt-[4.5rem] lg:mt-[4.85rem] gap-8 md:flex-row-reverse">
        <BookmarkImage />
        <Article title="Bookmark" className="lg:items-center">
          <TextBlock className="pb-6 pr-2">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            features section.
          </TextBlock>
          <ProjectLink to="bookmark">VIEW PROJECT</ProjectLink>
        </Article>
      </Section>

      <Section className="mt-[4.5rem] lg:mt-20 gap-8">
        <InsureImage />
        <Article title="Insure" className="lg:items-center">
          <TextBlock className="pb-[3.3rem] md:pb-6">
            This was a small project which mostly consisted of HTML and CSS. I
            built a fully&#8209;responsive landing page. The only JavaScript
            this project required was to enable the toggling of the mobile
            navigation.
          </TextBlock>
          <ProjectLink to="insure">VIEW PROJECT</ProjectLink>
        </Article>
      </Section>

      <Section className="mt-[4.5rem] lg:mt-20 gap-8 md:flex-row-reverse">
        <FyloImage />
        <Article title="Fylo" className="lg:items-center">
          <TextBlock className="pb-6 md:pr-2">
            This project was built in pure HTML and CSS. I had mobile and
            desktop designs to work to and built it so that it was
            fully&#8209;responsive. I took a mobile&#8209;first approach and
            used modern CSS like Flexbox and Grid for layout purposes.
          </TextBlock>
          <ProjectLink to="fylo">VIEW PROJECT</ProjectLink>
        </Article>
      </Section>

      <ContactSection className="my-20 lg:my-[9.5rem]" />
    </main>
  );
}

export default Overview;

type TextBlockProps = {
  className?: string;
};

function TextBlock({ children, className }: PropsWithChildren<TextBlockProps>) {
  return (
    <p
      className={`font-publicSans tracking-tight lg:tracking-normal text-[0.95rem] lg:text-base opacity-80 leading-[1.875rem] lg:leading-[1.875rem] text-left pt-5 lg:pt-6 pb-6 min-h-[11.75rem] ${className}`}
    >
      {children}
    </p>
  );
}

function Article({
  children,
  className,
  title,
}: PropsWithChildren<{ title: string; className?: string }>) {
  return (
    <article className={`flex ${className}`}>
      <div className="flex flex-col flex-1 justify-start lg:pb-7 pt-6 md:pl-9 lg:pl-0 md:pt-12 border-y-[0.25px] border-solid border-grayish-dark-blue/15">
        <ArticleHeader className="pb-1">{title}</ArticleHeader>
        {children}
      </div>
    </article>
  );
}
