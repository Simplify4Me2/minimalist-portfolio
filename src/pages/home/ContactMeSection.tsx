import { Button } from "../../components";

export function ContactMeSection() {
    return (
      <section className="flex flex-col text-center pt-[7.2rem] pb-20">
        <span className="font-ibarra font-bold text-4xl tracking-tight">
          Interested in doing a project together?
        </span>
        <Button variant="outlined" className="mt-10 self-center">
          CONTACT ME
        </Button>
      </section>
    );
  }
  