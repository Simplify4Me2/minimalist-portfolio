import ManageImage from "../assets/portfolio/mobile/image-portfolio-manage.jpg";
import { Footer } from "../Footer";
import { Header } from "../Header";

export function Portfolio() {
  return (
    <>
      <Header />
      <main className="px-8">
        <section className="flex flex-col pt-2 pb-6 ">
          <img src={ManageImage} />
          <hr className="mt-8 mb-6 border-y-[0.25px] border-solid border-light-grey" />
          <h1 className="font-ibarra font-bold text-4xl tracking-tight pb-6">
            Manage
          </h1>
          <p className="font-publicSans text-[0.94rem] leading-[1.875rem] text-left pb-1.5">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
