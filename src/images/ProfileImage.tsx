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

  
// TODO: Refactor the ProfileImage component to use the srcSet attribute
// import ProfileMobileImage from "../assets/homepage/mobile/image-homepage-profile.jpg";
// import ProfileTabletImage from "../assets/homepage/tablet/image-homepage-profile.jpg";
// import ProfileDesktopImage from "../assets/homepage/desktop/image-homepage-profile.jpg";

// export function ProfileImage() {
//     return (
//       <img
//         src={ProfileMobileImage}
//         srcSet={`${ProfileMobileImage} 320w, ${ProfileTabletImage} 768w, ${ProfileDesktopImage} 1280w`}
//         sizes="(max-width: 640px) 100%, (max-width: 768px) 100%, 100%"
//         alt="homepage image"
//       />
//     );
//   }