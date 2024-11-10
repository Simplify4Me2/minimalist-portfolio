import ManageImage from "../assets/portfolio/mobile/image-portfolio-manage.jpg";
import BookmarkImage from "../assets/portfolio/mobile/image-portfolio-bookmark.jpg";
import InsureImage from "../assets/portfolio/mobile/image-portfolio-insure.jpg";
import FyloImage from "../assets/portfolio/mobile/image-portfolio-fylo.jpg";
import { Button } from "../components";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { useScrollToTop } from "../hooks/useScrollToTop";

export function PortfolioOverview() {

  useScrollToTop();

  return (
    <>
      <Header />
      <main className="px-8">
        <section className="flex flex-col pt-2 pb-6 border-b-[0.25px] border-solid border-light-grey mb-16">
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
          <Button variant="outlined" className="mt-4 self-start">
            VIEW PROJECT
          </Button>
        </section>
        <section className="flex flex-col pt-2 pb-6 border-b-[0.25px] border-solid border-light-grey mb-16">
          <img src={BookmarkImage} />
          <hr className="mt-8 mb-6 border-y-[0.25px] border-solid border-light-grey" />
          <h1 className="font-ibarra font-bold text-4xl tracking-tight pb-6">
            Bookmark
          </h1>
          <p className="font-publicSans text-[0.94rem] leading-[1.875rem] text-left pb-1.5">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            features section.
          </p>
          <Button variant="outlined" className="mt-4 self-start">
            VIEW PROJECT
          </Button>
        </section>
        <section className="flex flex-col pt-2 pb-6 border-b-[0.25px] border-solid border-light-grey mb-16">
          <img src={InsureImage} />
          <hr className="mt-8 mb-6 border-y-[0.25px] border-solid border-light-grey" />
          <h1 className="font-ibarra font-bold text-4xl tracking-tight pb-6">
            Insure
          </h1>
          <p className="font-publicSans text-[0.94rem] leading-[1.875rem] text-left pb-1.5 min-h-[11.75rem]">
            This was a small project which mostly consisted of HTML and CSS. I
            built a fully&#8209;responsive landing page. The only JavaScript
            this project required was to enable the toggling of the mobile
            navigation.
          </p>
          <Button variant="outlined" className="mt-4 self-start">
            VIEW PROJECT
          </Button>
        </section>
        <section className="flex flex-col pt-2 pb-6 border-b-[0.25px] border-solid border-light-grey">
          <img src={FyloImage} />
          <hr className="mt-8 mb-6 border-y-[0.25px] border-solid border-light-grey" />
          <h1 className="font-ibarra font-bold text-4xl tracking-tight pb-6">
            Fylo
          </h1>
          <p className="font-publicSans text-[0.94rem] leading-[1.875rem] text-left pb-1.5 min-h-[11.75rem]">
            This project was built in pure HTML and CSS. I had mobile and
            desktop designs to work to and built it so that it was
            fully&#8209;responsive. I took a mobile&#8209;first approach and
            used modern CSS like Flexbox and Grid for layout purposes.
          </p>
          <Button variant="outlined" className="mt-4 self-start">
            VIEW PROJECT
          </Button>
        </section>
        <section className="flex flex-col text-center pt-20 pb-20">
          <span className="font-ibarra font-bold text-4xl tracking-tight">
            Interested in doing a project together?
          </span>
          <Button variant="outlined" className="mt-10 self-center">
            CONTACT ME
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
