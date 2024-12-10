import { Section, SocialMediaNav } from "../../components";
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
      </main>
    </>
  );
}

