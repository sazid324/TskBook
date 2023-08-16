// Library imports

// Assets
import reminderImage from "../assets/Images/Icons_and_logos/reminder.svg";

// Interfaces
interface ReminderButtonElements {
  indexOfCard: number;
}

export default function ReminderButton({ indexOfCard }: ReminderButtonElements) {
  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className="reminder-button-container-OfCard">
        <img src={reminderImage} alt="reminder-image" />
        <div
          className="reminder-content-wraper-in-lower-part-OfCard"
          onMouseEnter={() => {
            const reminderbuttonParagraphOfCard: any =
              document.getElementsByClassName(
                "reminder-button-paragraph-OfCard"
              )[indexOfCard];
            reminderbuttonParagraphOfCard.style.display = "none";
          }}
        >
          <div className="contents-in-reminder-button-OfCard"></div>
        </div>
      </div>
      <p className="element-text-in-lower-part-OfCard reminder-button-paragraph-OfCard">
        Reminder
      </p>
      <span className="overlay-on-element-in-lower-part-OfCard"></span>
    </>
  );
}
