import { PropsWithChildren } from "react";
import { Button, SectionHeader } from "../../components";
import { ManageHeroImage } from "../../images";

export function Manage() {
  return (
    <main className="max-w-screen-md lg:max-w-screen-xl px-8 pt-2 pb-4 md:px-10 lg:px-[5.25rem] lg:pt-0">
      <ManageHeroImage />
      <Section title="Manage">
        <p className="font-publicSans tracking-tight text-[0.95rem] leading-[1.875rem] text-left pt-[0.25rem] pb-6 min-h-[11.75rem]">
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </p>
        <Button variant="outlined">VISIT WEBSITE</Button>
      </Section>
    </main>
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
      <div className="flex flex-col border-y-[0.25px] border-solid border-grayish-dark-blue/15 pt-6 md:pt-12 pb-8 md:my-0 md:ml-[4.25rem] lg:mx-20 lg:pt-12 lg:w-[22.5rem]">
        <SectionHeader className="pb-5">{title}</SectionHeader>
        {children}
      </div>
    </section>
  );
}
