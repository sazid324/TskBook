// Library imports
import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

// CSS imports
import style from "@/components/Card/Card.module.scss";

// Assets
import reminderImage from "@/assets/Images/Icons/reminder.svg";
import calendarImage from "@/assets/Images/Icons/calendar.svg";
import watchImage from "@/assets/Images/Icons/watch.svg";
import arrowRight from "@/assets/Images/Icons/arrowRight.svg";

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
      <div
        className={`${style.reminderButtonContainerOfCard} reminderButtonContainerOfCard`}
      >
        <Image src={reminderImage} alt="reminder-image" />
        <div
          className={`${style.reminderContentWrapperInLowerPartOfCard} reminderContentWrapperInLowerPartOfCard`}
          onMouseEnter={() => {
            const reminderbuttonParagraphOfCard: any =
              document.getElementsByClassName("reminderButtonParagraphOfCard")[
                indexOfCard
              ];
            reminderbuttonParagraphOfCard.style.display = "none";
          }}
        >
          <div
            className={`${style.contentsInReminderButtonOfCard} contentsInReminderButtonOfCard`}
          >
            <h4
              className={`${style.dateAndTimePickerHeadingOfCard} dateAndTimePickerHeadingOfCard`}
            >
              <p
                className={`${style.dateAndTimePickerHeadingParagraphOfCard} dateAndTimePickerHeadingParagraphOfCard`}
              >
                Pick date & time
              </p>
              <Image
                className={`${style.dateAndTimePickerHeadingImageOfCard} dateAndTimePickerHeadingImageOfCard`}
                src={arrowRight}
                alt="arrowRight-image"
              />
            </h4>
            <div
              className={`${style.datePickerContainerOfCard} datePickerContainerOfCard`}
            >
              <DatePicker
                inputClass={style.datePickerOfCard}
                placeholder="Pick date"
                value={selectedDate}
                onChange={(date: any) => setSelectedDate(date)}
                format="DD-MMM-YYYY"
                minDate={new Date()}
              ></DatePicker>
              <Image
                className={`${style.datePickerImageOfCard} datePickerImageOfCard`}
                src={calendarImage}
                alt="calendar-image"
              />
            </div>
            <div
              className={`${style.timePickerContainerOfCard} timePickerContainerOfCard`}
            >
              <DatePicker
                inputClass={style.timePickerOfCard}
                placeholder="Pick time"
                value={selectedTime}
                onChange={(time: any) => setSelectedTime(time)}
                disableDayPicker
                format="hh:mm:ss A"
                plugins={[<TimePicker key={elementOfCard.id} />]}
              ></DatePicker>
              <Image
                className={`${style.timePickerImageOfCard} timePickerImageOfCard`}
                src={watchImage}
                alt="watch-image"
              />
            </div>
            <span
              className={`${style.dateAndTimePickerButtonOfCard} dateAndTimePickerButtonOfCard`}
              onClick={() => setReminderFunctionOnClick()}
            >
              Set Reminder
            </span>
          </div>
        </div>
      </div>
      <p
        className={`${style.elementTextInLowerPartOfCard} elementTextInLowerPartOfCard reminderButtonParagraphOfCard`}
      >
        Reminder
      </p>
      <span
        className={`${style.overlayOnElementInLowerPartOfCard} overlayOnElementInLowerPartOfCard`}
      ></span>
    </>
  );
}
