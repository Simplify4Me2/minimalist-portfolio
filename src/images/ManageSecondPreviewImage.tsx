import ManageFirstPreviewMobileImage from "../assets/detail/mobile/image-manage-preview-2.jpg";

export function ManageSecondPreviewImage() {
   return <>
        <img
          src={ManageFirstPreviewMobileImage}
          alt="homepage image"
          className="md:hidden"
          loading="lazy"
        />
        <img
          src={ManageFirstPreviewMobileImage}
          alt="homepage image"
          className="hidden md:block lg:hidden"
          loading="lazy"
        />
        <img
          src={ManageFirstPreviewMobileImage}
          alt="homepage image"
          className="hidden lg:block"
          loading="lazy"
        />
      </>
}