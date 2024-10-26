import './App.css'
import HamburgerIcon from './assets/icons/hamburger.svg';
import LogoIcon from './assets/logo.svg';
import Image from './assets/homepage/mobile/image-homepage-hero.jpg';

function App() {

  return (
    <>
      <header className='flex items-center justify-between p-8'><img src={LogoIcon} /><img src={HamburgerIcon} /></header>
      <main>
        <section><img src={Image} className='px-8 pt-2' /> Hey, I'm Alex Spencer and I love building beautiful websites</section>
        <section>
          <h1>About me</h1>
          <p>I'm a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I'm based in London, UK, but I'm happ working remotely and have experience in remote teams. When I'm not coding, you'll find me outdoors. I love being out in nature whether that's going for a walk, run or cycling. I'd love you to check ou my work.</p>
          </section>
        <section>Interested in doing a project together?</section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
