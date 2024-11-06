import ManageImage from '../assets/portfolio/mobile/image-portfolio-manage.jpg';

export function Portfolio() {
  return <main className="px-8">
    <section className="flex flex-col pt-2 pb-6">
        <img src={ManageImage} />
    </section>
  </main>;
}
