import { useNavigate } from "react-router-dom";
import { Button, SectionHeader } from "../../components";
import { ProfileImage } from "../../images";

type AboutMeSectionProps = {
  className?: string;
};

export function AboutMeSection({ className }: AboutMeSectionProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/portfolio");
  }

  return (
    <section
      className={`flex flex-col md:flex-row lg:justify-between pt-2 lg:pt-16 ${className}`}
    >
      <ProfileImage />
      <div className="flex flex-col border-y-[0.25px] border-solid border-grayish-dark-blue/15 my-8 pt-8 md:pt-12 pb-12 md:my-0 md:ml-[4.25rem] lg:mx-20 lg:pt-12 lg:w-[22.5rem]">
        <SectionHeader className="pb-6">About Me</SectionHeader>
        <p className="font-publicSans leading-[1.875rem] text-left pt-[0.25rem] pb-1.5 min-h-[11.75rem]">
          I'm a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I'm based in London, UK, but I'm happy working remotely and have
          experience in remote teams. When I'm not coding, you'll find me
          outdoors. I love being out in nature whether that's going for a walk,
          run or cycling. I'd love you to check out my work.
        </p>
        <Button
          variant="outlined"
          className="mt-4 self-start"
          onClick={handleClick}
        >
          GO TO PORTFOLIO
        </Button>
      </div>
    </section>
  );
}
