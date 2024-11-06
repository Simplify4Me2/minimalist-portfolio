import LogoIcon from "./assets/logo.svg";
import HamburgerIcon from "./assets/icons/hamburger.svg";

export function Header() {
    return <header className="flex items-center justify-between p-8">
    <img src={LogoIcon} />
    <img src={HamburgerIcon} />
  </header>
}