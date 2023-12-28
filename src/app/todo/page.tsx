"use client";

// CSS imports
import style from "@/app/todo/todo.module.scss";

// Component imports
import NoContent from "@/layouts/NoContent/NoContent";

// Assets
import todoImage from "@/assets/Images/Icons/to-do.svg";

// Custom Hook imports
import useJWTRecover from "@/hooks/useJWTRecover";

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
          <NoContent imageSource={todoImage} imageAlt={"to-do_logo"}>
            {"To-do elements will appear here"}
          </NoContent>
        )}
      </div>
    </>
  );
}
