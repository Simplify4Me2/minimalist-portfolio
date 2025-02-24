import { Link } from "react-router-dom";
import ArrowLeft from "../assets/icons/arrow-left.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";

type PortfolioNavigationProps = {
  previousProject: string;
  previousProjectLink: string;
  nextProject: string;
  nextProjectLink: string;
};

export function PortfolioNavigation({
  previousProject,
  previousProjectLink,
  nextProject,
  nextProjectLink,
}: PortfolioNavigationProps) {
  return (
    <nav className="max-w-screen-md lg:max-w-screen-xl flex w-full px-6 lg:px-20 mt-[4.25rem] lg:mt-12 ">
      <Link
        to={previousProjectLink}
        className="flex-1 border-black border-grayish-dark-blue/[.15] border-y-[1px]"
      >
        <img src={ArrowLeft} className="pt-[1.4rem] pb-4" />
        <div>
          <p className="font-serif text-3xl">{previousProject}</p>
          <p className="font-sans tracking-wide pt-1 pb-6 opacity-50">
            Previous Project
          </p>
        </div>
      </Link>
      <span className="border-l-[1px] border-grayish-dark-blue/[.15]"></span>
      <Link
        to={nextProjectLink}
        className="flex-1 flex flex-col text-right border-grayish-dark-blue/[.15] border-solid border-y-[1px]"
      >
        <img src={ArrowRight} className="self-end pt-[1.4rem] pb-4" />
        <div>
          <p className="font-serif text-3xl">{nextProject}</p>
          <p className="font-sans tracking-wide pt-1 pb-6 opacity-50">
            Next Project
          </p>
        </div>
      </Link>
    </nav>
  );
}
