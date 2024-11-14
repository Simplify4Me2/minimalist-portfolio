import { Button } from "../../components";

type ContactMeSectionProps = {
  className: string;
}

export function ContactMeSection({ className } : ContactMeSectionProps) {
    return (
      <section className={`flex flex-col text-center ${className}`}>
      <span className="font-ibarra font-bold text-4xl tracking-tight">
        Interested in doing a project together?
      </span>
      <Button variant="outlined" className="mt-10 self-center">
        CONTACT ME
      </Button>
    </section>
    );
  }
  