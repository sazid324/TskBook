"use client";

// CSS imports
import style from "@/app/archive/archive.module.scss";

// Component imports
import NoContent from "@/components/NoContent/NoContent";

// Custom Hook imports
import useJWTRecover from "@/customHook/useJWTRecover";

// Assets
import archiveImage from "../../../public/assets/Images/Icons/archive.svg";

export default function Archive() {
  // Custom Hooks
  useJWTRecover();

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className={`${style.archiveContainerOfCard} archiveContainerOfCard`}>
        {0 ? (
          <p>Dummy</p>
        ) : (
          <NoContent imageSource={archiveImage} imageAlt={"archive_logo"}>
            {"Your archived elements appear here"}
          </NoContent>
        )}
      </div>
    </>
  );
}
