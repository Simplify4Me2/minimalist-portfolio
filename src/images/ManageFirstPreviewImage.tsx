import ManageFirstPreviewMobileImage from "../assets/detail/mobile/image-manage-preview-1.jpg";

export function ManageFirstPreviewImage() {
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