"use client";

// CSS imports
import style from "@/app/todo/todo.module.scss";

// Component imports
import PageWatermark from "@/components/PageWatermark/PageWatermark";

// Custom Hook imports
import useJWTRecover from "@/customHook/useJWTRecover";

// Assets
import todoImage from "../../../public/assets/Images/Icons/to-do.svg";

export default function ToDo() {
  // Custom Hooks
  useJWTRecover();

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div
        className={`${style.toDoPageContainerOfCard} toDoPageContainerOfCard`}
      >
        {0 ? (
          <p>Dummy</p>
        ) : (
          <PageWatermark imageSource={todoImage} imageAlt={"to-do_logo"}>
            {"To-do elements will appear here"}
          </PageWatermark>
        )}
      </div>
    </>
  );
}
