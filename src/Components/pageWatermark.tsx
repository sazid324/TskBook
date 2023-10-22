// Interfaces
interface PageWatermarkElements {
  imageSource: any;
  imageAlt: any;
  children: string;
}

export default function PageWatermark({
  imageSource,
  imageAlt,
  children,
}: PageWatermarkElements) {
  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <span className="watermark-on-no-items">
        <img
          className="watermark-img-on-no-items"
          src={imageSource}
          alt={imageAlt}
        />
        <p className="watermark-text-on-no-items">{children}</p>
      </span>
    </>
  );
}
