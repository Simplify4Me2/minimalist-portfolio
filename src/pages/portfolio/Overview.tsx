import InsureImage from "../../assets/portfolio/mobile/image-portfolio-insure.jpg";
import FyloImage from "../../assets/portfolio/mobile/image-portfolio-fylo.jpg";
import { Button, SectionHeader, TextBlock } from "../../components";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { useNavigate } from "react-router-dom";
import { BookmarkImage, ManageImage } from "../../images";
import { PropsWithChildren } from "react";

function Overview() {
  const navigate = useNavigate();

  useScrollToTop();

  return (
    <>
      <main className="px-8 py-2">
        <ManageImage />
        <Section title="Manage">
          <TextBlock tracking="tight" fontSize="[0.95rem]" className="pr-2">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </TextBlock>
          <Button
            variant="outlined"
            className="self-start"
            onClick={() => navigate("manage")}
          >VIEW PROJECT</Button>
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
      className={`flex flex-col md:flex-row lg:justify-between pt-8 lg:pt-16 ${className}`}
    >
      <div className="flex flex-col border-y-[0.25px] border-solid border-grayish-dark-blue/15 pt-6 md:pt-12 pb-6 md:my-0 md:ml-[4.25rem] lg:mx-20 lg:pt-12 lg:w-[22.5rem]">
        <SectionHeader>{title}</SectionHeader>
        {children}
      </div>
    </section>
  );
}
