import { useState } from "react";
import { Link } from "react-router-dom";
import LogoIcon from "./assets/logo.svg";
import HamburgerIcon from "./assets/icons/hamburger.svg";
import CloseIcon from "./assets/icons/close.svg";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="max-w-screen-md lg:max-w-screen-xl w-full flex items-center justify-between p-8 md:pt-16 md:pb-12 md:px-10 lg:px-[5.25rem] relative">
      <Link to="/">
        <img src={LogoIcon} alt="logo" />
      </Link>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden z-20 relative"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <img
          src={menuOpen ? CloseIcon : HamburgerIcon}
          alt="menu toggle icon"
          className={`transition-transform duration-300 ${
            menuOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="md:flex gap-[42px] font-publicSans text-xs tracking-[0.125rem]">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT ME</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`absolute top-full right-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg z-10 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      role="menu"
      aria-hidden={!isOpen}
    >
      <ul className="flex flex-col gap-4 p-4 text-sm font-publicSans">
        <li>
          <Link to="/" onClick={onClose}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={onClose}>
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={onClose}>
            CONTACT ME
          </Link>
        </li>
      </ul>
    </div>
  );
}
