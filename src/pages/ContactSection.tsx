import { Button } from "../components";

type ContactSectionProps = {
  className?: string;
}

export function ContactSection({ className } : ContactSectionProps) {
    return (
      <section className={`flex flex-col md:flex-row md:justify-between md:items-center md:mt-2 md:mb-4 text-center ${className}`}>
      <span className="font-ibarra font-bold text-4xl tracking-tight md:w-[20.5rem] md:text-left md:mr-6 lg:mr-0">
        Interested in doing a project together?
      </span>
      <hr className="hidden md:block md:w-28 lg:w-[35rem] mt-8 mb-6 border-y-[0.25px] border-solid border-grayish-dark-blue/15" />
      <Button variant="outlined" className="mt-10 md:mt-0 self-center text-nowrap">
        CONTACT ME
      </Button>
    </section>
    );
  }
  