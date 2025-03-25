import { PropsWithChildren } from "react";
import {
  Button,
  ArticleHeader,
  SocialMediaNav,
  TextBlock,
} from "../../components";
import { useScrollToTop } from "../../hooks";

function Contact() {
  useScrollToTop();

  return (
    <>
      <main className="max-w-screen-md lg:max-w-screen-xl lg:w-full px-8 pb-4 md:pb-8 md:px-10 lg:px-[5.25rem] lg:pt-0">
        <Section title="Get in Touch">
          <TextBlock fontSize="[0.95rem]" tracking="tight" className="lg:max-w-[40rem] lg:pr-4 lg:pt-0 pt-[1.35rem] pb-6 lg:text-base lg:leading-[1.875rem]">
            I'd love to hear about what you're working on and how I could help.
            I'm currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I'm also happy to hear about opportunities
            that don't fit that description. I'm a hard&#8209;working and
            positive person who will always approach each task with a sense of
            purpose and attention to detail. Please do feel free to check out my
            online profiles below and get in touch using the form.
            <SocialMediaNav className="pt-6" />
          </TextBlock>
        </Section>
        <section className="flex flex-col lg:flex-row lg:w-full lg:justify-between pt-8 pb-16 lg:pb-20 font-sans font-bold text-xs tracking-wide">
          <ArticleHeader className="lg:pt-4">Contact Me</ArticleHeader>
          <form className="flex flex-col basis-full lg:max-w-[40rem] pt-[0.9rem] md:pt-6 lg:pt-1 ">
            <label className="text-[0.8rem] text-grayish-dark-blue my-4">
              Name
            </label>
            <input
              type="text"
              className="bg-light-grey h-12 mb-4 p-4 placeholder:opacity-40"
              placeholder="Jane Appleseed"
            />
            <label className="text-[0.8rem] text-grayish-dark-blue my-4">
              Email Address
            </label>
            <input
              type="text"
              className="bg-light-grey h-12 mb-4 p-4 placeholder:opacity-40"
              placeholder="email@example.com"
            />
            <label className="text-[0.8rem] text-grayish-dark-blue my-4">
              Message
            </label>
            <textarea
              className="bg-light-grey h-24 mb-4 p-4 placeholder:opacity-40"
              placeholder="How can I help?"
            />
            <Button variant="contained">SEND MESSAGE</Button>
          </form>
        </section>
      </main>
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
      className={`flex flex-col lg:justify-between pt-2 lg:pt-2 ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:justify-between border-y-[0.25px] border-solid border-grayish-dark-blue/15 pt-6 md:mt-[2.35rem] md:pt-8 pb-8 md:my-0 lg:pt-12 lg:pb-6 lg:w-full">
        <ArticleHeader className="pb-0 basis-full">{title}</ArticleHeader>
        {children}
      </div>
    </section>
  );
}

export default Contact;
