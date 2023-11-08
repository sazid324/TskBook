// CSS imports
import style from "@/app/archive/archive.module.scss";

// Component imports
import PageWatermark from "@/components/PageWatermark/PageWatermark";

// Assets
import archiveImage from "../../../public/assets/Images/Icons/archive.svg";

export default function Archive() {
  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className={`${style.archiveContainerOfCard} archiveContainerOfCard`}>
        {0 ? (
          <p>Dummy</p>
        ) : (
          <PageWatermark imageSource={archiveImage} imageAlt={"archive_logo"}>
            {"Your archived elements appear here"}
          </PageWatermark>
        )}
      </div>
    </>
  );
}
