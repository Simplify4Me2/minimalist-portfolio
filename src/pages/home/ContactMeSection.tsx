import { Button } from "../../components";

type ContactMeSectionProps = {
  className: string;
}

export function ContactMeSection({ className } : ContactMeSectionProps) {
    return (
      <section className={`flex flex-col lg:flex-row lg:justify-between lg:items-center lg:my-16 text-center ${className}`}>
      <span className="font-ibarra font-bold text-4xl tracking-tight lg:w-[20.5rem] lg:text-left">
        Interested in doing a project together?
      </span>
      <hr className="hidden lg:block w-[35rem] mt-8 mb-6 border-y-[0.25px] border-solid border-grayish-dark-blue/15" />
      <Button variant="outlined" className="mt-10 lg:mt-0 self-center">
        CONTACT ME
      </Button>
    </section>
    );
  }
  