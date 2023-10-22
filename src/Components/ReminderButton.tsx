// Library imports
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

// Assets
import reminderImage from "../../public/assets/Images/Icons_and_logos/reminder.svg";
import calendarImage from "../../public/assets/Images/Icons_and_logos/calendar.svg";
import watchImage from "../../public/assets/Images/Icons_and_logos/watch.svg";
import arrowRight from "../../public/assets/Images/Icons_and_logos/arrowRight.svg";

// Interfaces
interface ReminderButtonElements {
  indexOfCard: number;
  elementOfCard: any;
}

export default function ReminderButton({
  indexOfCard,
  elementOfCard,
}: ReminderButtonElements) {
  // Hooks
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Functions
  const setReminderFunctionOnClick = () => {
    Notification.requestPermission().then((permission: any) => {
      if (permission === "granted") {
        if (selectedDate && selectedTime) {
          const reminderTime: any = new Date(`${selectedDate} ${selectedTime}`);

          setTimeout(() => {
            new Notification("TskBook", {
              body: `${elementOfCard.headerValue}`,
              icon: `${reminderImage}`,
            });
          }, reminderTime.getTime() - Date.now());

          alert("Reminder has been set...");
        } else {
          alert("Please pick both Date and Time....");
        }
      }
    });
  };

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
                z
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
                z
                inputClass="time-picker-OfCard"
                placeholder="Pick time"
                value={selectedTime}
                onChange={(time: any) => setSelectedTime(time)}
                disableDayPicker
                format="hh:mm:ss A"
                plugins={[<TimePicker />]}
              ></DatePicker>
              <img
                className="time-picker-image-OfCard"
                src={watchImage}
                alt="watch-image"
              />
            </div>
            <span
              className="date-and-time-picker-button-OfCard"
              onClick={() => setReminderFunctionOnClick()}
            >
              Set Reminder
            </span>
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
