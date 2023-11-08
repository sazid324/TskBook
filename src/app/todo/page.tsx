// CSS imports
import style from "@/app/todo/todo.module.scss";

// Component imports
import PageWatermark from "@/components/PageWatermark/PageWatermark";

// Assets
import todoImage from "../../../public/assets/Images/Icons/to-do.svg";

export default function ToDo() {
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
