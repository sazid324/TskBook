// Library imports
import Image from "next/image";

// CSS imports
import style from "@/layouts/PageWatermark/PageWatermark.module.scss";

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
      <span className={`${style.watermarkOnNoItems} watermarkOnNoItems`}>
        <Image
          className={`${style.watermarkImgOnNoItems} watermarkImgOnNoItems`}
          src={imageSource}
          alt={imageAlt}
        />
        <p className={`${style.watermarkTextOnNoItems} watermarkTextOnNoItems`}>
          {children}
        </p>
      </span>
    </>
  );
}
