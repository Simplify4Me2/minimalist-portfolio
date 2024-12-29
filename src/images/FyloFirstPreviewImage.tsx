import MobileImage from "../assets/detail/mobile/image-fylo-preview-1.jpg";

export function FyloFirstPreviewImage() {
   return <>
        <img
          src={MobileImage}
          alt="homepage image"
          className="md:hidden"
          loading="lazy"
        />
        <img
          src={MobileImage}
          alt="homepage image"
          className="hidden md:block lg:hidden"
          loading="lazy"
        />
        <img
          src={MobileImage}
          alt="homepage image"
          className="hidden lg:block"
          loading="lazy"
        />
      </>
}