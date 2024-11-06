import LogoIcon from "./assets/logo.svg";
import GitHubIcon from "./assets/icons/github.svg";
import TwitterIcon from "./assets/icons/twitter.svg";
import LinkedInIcon from "./assets/icons/linkedin.svg";

export function Footer()
{
    return <footer className="flex flex-col justify-around items-center bg-grayish-dark-blue h-[22rem] text-white py-8">
    <img src={LogoIcon} className="invert" />
    <ul className="flex flex-col justify-between text-center font-publicSans text-xs font-extralight tracking-[0.15rem] h-28">
      <li>HOME</li>
      <li>PORTFOLIO</li>
      <li>CONTACT ME</li>
    </ul>
    <ul className="flex gap-4">
      <li>
        <img src={GitHubIcon} className="invert" />
      </li>
      <li>
        <img src={TwitterIcon} className="invert" />
      </li>
      <li>
        <img src={LinkedInIcon} className="invert" />
      </li>
    </ul>
  </footer>
}