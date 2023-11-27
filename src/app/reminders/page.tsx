"use client";

// CSS imports
import style from "@/app/reminders/reminders.module.scss";

// Component imports
import PageWatermark from "@/components/PageWatermark/PageWatermark";

// Custom Hook imports
import useJWTRecover from "@/customHook/useJWTRecover";

// Assets
import reminderImage from "../../../public/assets/Images/Icons/reminder.svg";

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
          <PageWatermark imageSource={reminderImage} imageAlt={"reminder_logo"}>
            {"Elements with upcoming reminders appear here"}
          </PageWatermark>
        )}
      </div>
    </>
  );
}
