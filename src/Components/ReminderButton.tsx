// Library imports
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

// Assets
import reminderImage from "../assets/Images/Icons_and_logos/reminder.svg";
import calendarImage from "../assets/Images/Icons_and_logos/calendar.svg";
import watchImage from "../assets/Images/Icons_and_logos/watch.svg";
import arrowRight from "../assets/Images/Icons_and_logos/arrowRight.svg";

// Interfaces
interface ReminderButtonElements {
  indexOfCard: number;
}

export default function ReminderButton({
  indexOfCard,
}: ReminderButtonElements) {
  // Hooks
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

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
          <div className="contents-in-reminder-button-OfCard">
            <h4 className="date-and-time-picker-heading-OfCard">
              Pick date & time
              <img
                className="date-and-time-picker-heading-image-OfCard"
                src={arrowRight}
                alt="arrowRight-image"
              />
            </h4>
            <div className="date-picker-container-OfCard">
              <DatePicker
                inputClass="date-picker-OfCard"
                placeholder="Pick date"
                value={selectedDate}
                onChange={(date: any) => setSelectedDate(date)}
                format="DD-MMM-YYYY"
                minDate={new Date()}
              ></DatePicker>
              <img
                className="date-picker-image-OfCard"
                src={calendarImage}
                alt="calendar-image"
              />
            </div>
            <div className="time-picker-container-OfCard">
              <DatePicker
                inputClass="time-picker-OfCard"
                placeholder="Pick time"
                value={selectedTime}
                onChange={(time: any) => setSelectedTime(time)}
                disableDayPicker
                format="hh:mm A"
                plugins={[<TimePicker />]}
              ></DatePicker>
              <img
                className="time-picker-image-OfCard"
                src={watchImage}
                alt="watch-image"
              />
            </div>
            <button className="date-and-time-picker-button-OfCard">
              Set Reminder
            </button>
          </div>
        </div>
      </div>
      <p className="element-text-in-lower-part-OfCard reminder-button-paragraph-OfCard">
        Reminder
      </p>
      <span className="overlay-on-element-in-lower-part-OfCard"></span>
    </>
  );
}
