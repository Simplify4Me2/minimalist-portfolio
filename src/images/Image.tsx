type ImageProps = {
  mobileImage: string;
  tabletImage: string;
  desktopImage: string;
  alt: string;
};

export function Image({
  mobileImage,
  tabletImage,
  desktopImage,
  alt,
}: ImageProps) {
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
