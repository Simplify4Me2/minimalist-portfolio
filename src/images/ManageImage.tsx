import MobileImage from "../assets/portfolio/mobile/image-portfolio-manage.jpg";
import TabletImage from "../assets/portfolio/tablet/image-portfolio-manage.jpg";
import DesktopImage from "../assets/portfolio/desktop/image-portfolio-manage.jpg";

export function ManageImage() {
  return (
    <Image
      mobileImage={MobileImage}
      tabletImage={TabletImage}
      desktopImage={DesktopImage}
      alt="Manage"
    />
  );
}

type ImageProps = {
  mobileImage: string;
  tabletImage: string;
  desktopImage: string;
  alt: string;
};

function Image({ mobileImage, tabletImage, desktopImage, alt }: ImageProps) {
  return (
    <>
      <img
        src={mobileImage}
        alt={`${alt} image`}
        className="md:hidden"
        loading="lazy"
      />
      <img
        src={tabletImage}
        alt={`${alt} image`}
        className="hidden md:block lg:hidden"
        loading="lazy"
      />
      <img
        src={desktopImage}
        alt={`${alt} image`}
        className="hidden lg:block"
        loading="lazy"
      />
    </>
  );
}
