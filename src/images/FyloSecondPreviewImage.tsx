import MobileImage from "../assets/detail/mobile/image-fylo-preview-2.jpg";

export function FyloSecondPreviewImage() {
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