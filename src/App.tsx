import "./App.css";
import HamburgerIcon from "./assets/icons/hamburger.svg";
import DownArrowsIcon from "./assets/icons/down-arrows.svg";
import LogoIcon from "./assets/logo.svg";
import HomepageImage from "./assets/homepage/mobile/image-homepage-hero.jpg";
import ProfileImage from "./assets/homepage/mobile/image-homepage-profile.jpg";

function App() {
  return (
    <>
      <header className="flex items-center justify-between p-8">
        <img src={LogoIcon} />
        <img src={HamburgerIcon} />
      </header>
      <main>
        <section className="flex flex-col px-8 pt-2 pb-6">
          <img src={HomepageImage} alt="homepage image" />
          <span className="font-ibarra font-bold text-4xl tracking-tight pt-6 pb-[1.85rem]">
            Hey, I'm Alex Spencer and I love building beautiful websites
          </span>
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
          className="px-8 pt-[4.5rem] pb-8"
        />
        <section className="flex flex-col px-8 border-t-[0.25px] border-solid border-light-grey">
          <p>
            I'm a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I'm based in London, UK, but I'm happy working remotely
            and have experience in remote teams. When I'm not coding, you'll
            find me outdoors. I love being out in nature whether that's going
            for a walk, run or cycling. I'd love you to check ou my work.
          </p>
        </section>
        <section>Interested in doing a project together?</section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
