import { PropsWithChildren } from "react";
import { SectionHeader } from ".";

interface SectionProps {
  title: string;
  className?: string;
}

export function Section({
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
