// Component imports
import PageWatermark from "../Components/pageWatermark";

// Assets
import reminderImage from "../assets/Images/Icons_and_logos/reminder.svg";

export default function Reminders() {
  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className="reminders-page-container-OfCard">
        {0 ? (
          <p>Dummy</p>
        ) : (
          <PageWatermark
            imageSource={reminderImage}
            imageAlt={"reminder_logo"}
            children={"Elements with upcoming reminders appear here"}
          />
        )}
      </div>
    </>
  );
}
