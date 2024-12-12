import ProfileMobileImage from "../assets/homepage/mobile/image-homepage-profile.jpg";
import ProfileTabletImage from "../assets/homepage/tablet/image-homepage-profile.jpg";
import ProfileDesktopImage from "../assets/homepage/desktop/image-homepage-profile.jpg";

export function ProfileImage() {
    return (
      <>
        <img
          src={ProfileMobileImage}
          alt="homepage image"
          className="md:hidden"
        />
        <img
          src={ProfileTabletImage}
          alt="homepage image"
          className="hidden md:block lg:hidden"
        />
        <img
          src={ProfileDesktopImage}
          alt="homepage image"
          className="hidden lg:block"
        />
      </>
    );
  }