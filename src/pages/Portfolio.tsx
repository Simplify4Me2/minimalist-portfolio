import ManageImage from "../assets/portfolio/mobile/image-portfolio-manage.jpg";
import { Footer } from "../Footer";
import { Header } from "../Header";

export function Portfolio() {
  return (
    <>
      <Header />
      <main className="px-8">
        <section className="flex flex-col pt-2 pb-6">
          <img src={ManageImage} />
        </section>
      </main>
      <Footer />
    </>
  );
}
