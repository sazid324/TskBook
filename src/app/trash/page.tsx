// CSS imports
import style from "@/app/trash/trash.module.scss";

// Component imports
import PageWatermark from "@/components/PageWatermark/PageWatermark";

// Custom Hook imports
import useJWTRecover from "@/customHook/useJWTRecover";

// Assets
import trashImage from "../../../public/assets/Images/Icons/trash.svg";

export default function Trash() {
  // Custom Hooks
  useJWTRecover();

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div
        className={`${style.trashPageContainerOfCard} trashPageContainerOfCard`}
      >
        {0 ? (
          <p>Dummy</p>
        ) : (
          <PageWatermark imageSource={trashImage} imageAlt={"trash_logo"}>
            {"No elements in Trash"}
          </PageWatermark>
        )}
      </div>
    </>
  );
}
