import LogoIcon from "./assets/logo.svg";
import HamburgerIcon from "./assets/icons/hamburger.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="max-w-screen-xl w-full flex items-center justify-between p-8 md:pt-16 md:pb-12 md:px-10 lg:px-[5.25rem]">
      <Link to="/">
        <img src={LogoIcon} alt="logo" />
      </Link>
      <button>
        <img src={HamburgerIcon} className="md:hidden" />
      </button>
      <nav className="hidden md:block">
        <ul className="md:flex gap-[42px] font-publicSans text-xs tracking-[0.125rem]">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="portfolio">PORTFOLIO</Link></li>
          <li><Link to="contact">CONTACT ME</Link></li>
        </ul>
      </nav>
    </header>
  );
}
