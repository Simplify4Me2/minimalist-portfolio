import MobileImage from "../assets/detail/mobile/image-bookmark-preview-2.jpg";

export function BookmarkSecondPreviewImage() {
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