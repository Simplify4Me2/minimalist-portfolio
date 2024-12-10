import GitHubIcon from "../assets/icons/github.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";

interface SocialMediaNavProps {
    inverted?: boolean;
}

export function SocialMediaNav({ inverted = false }: SocialMediaNavProps) {
    return <nav>
    <ul className="flex gap-4 lg:items-center">
      <li>
        <img src={GitHubIcon} className={`${inverted && "invert"}`} />
      </li>
      <li>
        <img src={TwitterIcon} className={`${inverted && "invert"}`} />
      </li>
      <li>
        <img src={LinkedInIcon} className={`${inverted && "invert"}`} />
      </li>
    </ul>
  </nav>
  }