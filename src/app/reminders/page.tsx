"use client";

// CSS imports
import style from "@/app/reminders/reminders.module.scss";

// Component imports
import NoContent from "@/layouts/NoContent/NoContent";

// Custom Hook imports
import useJWTRecover from "@/hooks/useJWTRecover";

// Assets
import reminderImage from "@/assets/Images/Icons/reminder.svg";

export default function Reminders() {
  // Custom Hooks
  useJWTRecover();

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div
        className={`${style.remindersPageContainerOfCard} remindersPageContainerOfCard`}
      >
        {0 ? (
          <p>Dummy</p>
        ) : (
          <NoContent imageSource={reminderImage} imageAlt={"reminder_logo"}>
            {"Elements with upcoming reminders appear here"}
          </NoContent>
        )}
      </div>
    </>
  );
}
