import InsureImage from "../../assets/portfolio/mobile/image-portfolio-insure.jpg";
import FyloImage from "../../assets/portfolio/mobile/image-portfolio-fylo.jpg";
import {
  Button,
  Section,
  ProjectLink,
  ArticleHeader,
} from "../../components";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { useNavigate } from "react-router-dom";
import { BookmarkImage, ManageImage } from "../../images";
import { PropsWithChildren } from "react";

function Overview() {
  const navigate = useNavigate();

  useScrollToTop();

  return (
    <>
      <main className="max-w-screen-md lg:max-w-screen-xl px-8 md:px-10 lg:px-[5.25rem] lg:pt-12">
        <Section className="my-2 lg:mt-0">
          <ManageImage />
          <Article title="Manage" className="mt-8 lg:mt-0">
            <TextBlock className="pb-6">
              This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              testimonial slider.
            </TextBlock>
            <ProjectLink to="manage">VIEW PROJECT</ProjectLink>
          </Article>
        </Section>

        <Section className="mt-[4.85rem] md:flex-row-reverse">
          <BookmarkImage />
          <Article title="Bookmark" className="mt-8">
            <TextBlock className="pb-6">
              This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              features section.
            </TextBlock>
            <ProjectLink to="bookmark">VIEW PROJECT</ProjectLink>
          </Article>
        </Section>

        <section className="flex flex-col pt-[4.5rem] pb-6 border-b-[0.25px] border-solid border-light-grey mb-16">
          <BookmarkImage />
          <hr className="mt-8 mb-6 border-y-[0.25px] border-solid border-light-grey" />
          <h1 className="font-ibarra font-bold text-4xl tracking-tight pb-6">
            Bookmark
          </h1>
          <p className="font-publicSans text-[0.94rem] leading-[1.875rem] text-left pb-1.5">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            features section.
          </p>
          <Button
            variant="outlined"
            className="mt-4 self-start"
            onClick={() => navigate("bookmark")}
          >
            VIEW PROJECT
          </Button>
        </section>
        <section className="flex flex-col pt-2 pb-6 border-b-[0.25px] border-solid border-light-grey mb-16">
          <img src={InsureImage} />
          <hr className="mt-8 mb-6 border-y-[0.25px] border-solid border-light-grey" />
          <h1 className="font-ibarra font-bold text-4xl tracking-tight pb-6">
            Insure
          </h1>
          <p className="font-publicSans text-[0.94rem] leading-[1.875rem] text-left pb-1.5 min-h-[11.75rem]">
            This was a small project which mostly consisted of HTML and CSS. I
            built a fully&#8209;responsive landing page. The only JavaScript
            this project required was to enable the toggling of the mobile
            navigation.
          </p>
          <Button
            variant="outlined"
            className="mt-4 self-start"
            onClick={() => navigate("insure")}
          >
            VIEW PROJECT
          </Button>
        </section>
        <section className="flex flex-col pt-2 pb-6 border-b-[0.25px] border-solid border-light-grey">
          <img src={FyloImage} />
          <hr className="mt-8 mb-6 border-y-[0.25px] border-solid border-light-grey" />
          <h1 className="font-ibarra font-bold text-4xl tracking-tight pb-6">
            Fylo
          </h1>
          <p className="font-publicSans text-[0.94rem] leading-[1.875rem] text-left pb-1.5 min-h-[11.75rem]">
            This project was built in pure HTML and CSS. I had mobile and
            desktop designs to work to and built it so that it was
            fully&#8209;responsive. I took a mobile&#8209;first approach and
            used modern CSS like Flexbox and Grid for layout purposes.
          </p>
          <Button
            variant="outlined"
            className="mt-4 self-start"
            onClick={() => navigate("fylo")}
          >
            VIEW PROJECT
          </Button>
        </section>
        <section className="flex flex-col text-center pt-20 pb-20">
          <span className="font-ibarra font-bold text-4xl tracking-tight">
            Interested in doing a project together?
          </span>
          <Button variant="outlined" className="mt-10 self-center">
            CONTACT ME
          </Button>
        </section>
      </main>
    </>
  );
}

export default Overview;


function Article({
  title,
  children,
  className,
}: PropsWithChildren<{ title: string; className?: string }>) {
  return (
    <article
      className={`flex lg:items-center ${className}`}
    >
      <div className="flex flex-col h-full justify-center lg:pb-7 pt-6 lg:pt-12 md:my-0 md:ml-[4.25rem] lg:ml-32 lg:mr-24 border-y-[0.25px] border-solid border-grayish-dark-blue/15">
        <ArticleHeader className="pb-1">{title}</ArticleHeader>
        {children}
      </div>
    </article>
  );
}

type TextBlockProps = {
  className?: string;
}

function TextBlock({ children, className }: PropsWithChildren<TextBlockProps>) {
  return (
    <p className={`font-publicSans tracking-tight lg:tracking-normal text-[0.95rem] lg:text-base opacity-80 leading-[1.875rem] lg:leading-[1.875rem] text-left pt-5 lg:pt-6 pb-6 pr-2 min-h-[11.75rem] ${className}`}>
      {children}
    </p>
  );
}
