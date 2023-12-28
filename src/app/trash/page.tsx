"use client";

// CSS imports
import style from "@/app/trash/trash.module.scss";

// Component imports
import NoContent from "@/layouts/NoContent/NoContent";

// Assets
import trashImage from "@/assets/Images/Icons/trash.svg";

// Custom Hook imports
import useJWTRecover from "@/hooks/useJWTRecover";

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
          <NoContent imageSource={trashImage} imageAlt={"trash_logo"}>
            {"No elements in Trash"}
          </NoContent>
        )}
      </div>
    </>
  );
}
