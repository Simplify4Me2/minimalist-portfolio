import "./App.css";
import HamburgerIcon from "./assets/icons/hamburger.svg";
import DownArrowsIcon from "./assets/icons/down-arrows.svg";
import GitHubIcon from "./assets/icons/github.svg";
import TwitterIcon from "./assets/icons/twitter.svg";
import LinkedInIcon from "./assets/icons/linkedin.svg";
import LogoIcon from "./assets/logo.svg";
import HomepageImage from "./assets/homepage/mobile/image-homepage-hero.jpg";
import ProfileImage from "./assets/homepage/mobile/image-homepage-profile.jpg";
import { Button } from "./components";

function App() {
  return (
    <>
      <header className="flex items-center justify-between p-8">
        <img src={LogoIcon} />
        <img src={HamburgerIcon} />
      </header>
      <main className="px-8">
        <section className="flex flex-col pt-2 pb-6">
          <img src={HomepageImage} alt="homepage image" />
          <h1 className="font-ibarra font-bold text-4xl tracking-tight pt-6 pb-[1.85rem]">
            Hey, I'm Alex Spencer and I love building beautiful websites
          </h1>
          <button className="flex items-center h-12 max-w-[12.5rem] bg-dark-blue">
            <img src={DownArrowsIcon} className="h-full p-4 bg-dark-blue" />
            <p className="font-publicSans w-full text-white text-xs font-extralight tracking-[0.15rem]">
              ABOUT ME
            </p>
          </button>
        </section>
        <img
          src={ProfileImage}
          alt="profile picture"
          className="pt-[4.5rem] pb-8"
        />
        <section className="flex flex-col pb-[2.1rem] border-y-[0.25px] border-solid border-light-grey">
          <h1 className="font-ibarra font-bold text-4xl tracking-tight pt-8 pb-[1.9rem]">
            About Me
          </h1>
          <p className="font-publicSans leading-[1.875rem] text-left pb-1.5">
            I'm a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I'm based in London, UK, but I'm happy working remotely
            and have experience in remote teams. When I'm not coding, you'll
            find me outdoors. I love being out in nature whether that's going
            for a walk, run or cycling. I'd love you to check out my work.
          </p>
          <Button variant="outlined" className="self-start my-4 ">
            GO TO PORTFOLIO
          </Button>
        </section>
        <section className="flex flex-col text-center pt-[7.2rem] pb-20">
          <span className="font-ibarra font-bold text-4xl tracking-tight">
            Interested in doing a project together?
          </span>
          <Button variant="outlined" className="mt-10 self-center">
            CONTACT ME
          </Button>
        </section>
      </main>
      <footer className="flex flex-col justify-around items-center bg-grayish-dark-blue h-[22rem] text-white py-8">
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
    </>
  );
}

export default App;
