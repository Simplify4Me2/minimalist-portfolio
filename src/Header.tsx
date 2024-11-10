import LogoIcon from "./assets/logo.svg";
import HamburgerIcon from "./assets/icons/hamburger.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex items-center justify-between p-8 w-lvw">
      <Link to="/">
        <img src={LogoIcon} />
      </Link>
      <img src={HamburgerIcon} />
    </header>
  );
}
