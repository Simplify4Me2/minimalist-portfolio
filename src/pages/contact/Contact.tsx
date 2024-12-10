import { PropsWithChildren } from "react";
import { SectionHeader, SocialMediaNav } from "../../components";
import { useScrollToTop } from "../../hooks";

export function Contact() {
  useScrollToTop();

  return (
    <>
      <main className="max-w-screen-md lg:max-w-screen-xl px-8 pb-4 md:px-10 lg:px-[5.25rem] lg:pt-0">
        <Section title="Get in Touch">
          <p className="font-publicSans tracking-tight text-[0.95rem] leading-[1.875rem] text-left pt-[0.25rem] pb-6 min-h-[11.75rem]">
            I'd love to hear about what you're working on and how I could help.
            I'm currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I'm also happy to hear about opportunities
            that don't fit that description. I'm a hard&#8209;working and
            positive person who will always approach each task with a sense of
            purpose and attention to detail. Please do feel free to check out my
            online profiles below and get in touch using the form.
          </p>
          <SocialMediaNav />
        </Section>
        <section className="flex flex-col pt-8 pb-48 font-sans font-bold text-xs tracking-wide">
          <SectionHeader>Contact Me</SectionHeader>
          <label className="mt-[1.9rem] mb-4">Name</label>
          <input type="text" className="bg-light-grey h-12" />
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
      className={`flex flex-col md:flex-row lg:justify-between pt-2 lg:pt-16 ${className}`}
    >
      <div className="flex flex-col border-y-[0.25px] border-solid border-grayish-dark-blue/15 pt-6 md:pt-12 pb-8 md:my-0 md:ml-[4.25rem] lg:mx-20 lg:pt-12 lg:w-[22.5rem]">
        <SectionHeader className="pb-5">{title}</SectionHeader>
        {children}
      </div>
    </section>
  );
}
