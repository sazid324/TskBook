// Assets
import noteImage from "../assets/Images/Icons_and_logos/note.svg";
import todo from "../assets/Images/Icons_and_logos/to-do.svg";
import calendar from "../assets/Images/Icons_and_logos/calendar.svg";
import reminderImage from "../assets/Images/Icons_and_logos/reminder.svg";
import labelImage from "../assets/Images/Icons_and_logos/label.svg";
import archiveImage from "../assets/Images/Icons_and_logos/archive.svg";
import trashImage from "../assets/Images/Icons_and_logos/trash.svg";

export default function ListGroup() {
  return (
    <>
      <ul className="ulOfListGroup">
        <li className="liOfListGroup">
          <span className="liLogoOfListGroup">
            <img
              className="liLogoImageOfListGroup"
              src={noteImage}
              alt="note_logo"
            />
          </span>
          <p className="pInLiOfListGroup">Notes</p>
        </li>
        <li className="liOfListGroup">
          <span className="liLogoOfListGroup">
            <img
              className="liLogoImageOfListGroup"
              src={todo}
              alt="to-do_logo"
            />
          </span>
          <p className="pInLiOfListGroup">To-Do</p>
        </li>
        <li className="liOfListGroup">
          <span className="liLogoOfListGroup">
            <img
              className="liLogoImageOfListGroup"
              src={calendar}
              alt="calendar_logo"
            />
          </span>
          <p className="pInLiOfListGroup">Calendar</p>
        </li>
        <li className="liOfListGroup">
          <span className="liLogoOfListGroup">
            <img
              className="liLogoImageOfListGroup"
              src={reminderImage}
              alt="reminder_logo"
            />
          </span>
          <p className="pInLiOfListGroup">Reminders</p>
        </li>
        <li className="liOfListGroup">
          <span className="liLogoOfListGroup">
            <img
              className="liLogoImageOfListGroup"
              src={labelImage}
              alt="label_logo"
            />
          </span>
          <p className="pInLiOfListGroup">Labels</p>
        </li>
        <li className="liOfListGroup">
          <span className="liLogoOfListGroup">
            <img
              className="liLogoImageOfListGroup"
              src={archiveImage}
              alt="archive_logo"
            />
          </span>
          <p className="pInLiOfListGroup">Archive</p>
        </li>
        <li className="liOfListGroup">
          <span className="liLogoOfListGroup">
            <img
              className="liLogoImageOfListGroup"
              src={trashImage}
              alt="trash_logo"
            />
          </span>
          <p className="pInLiOfListGroup">Trash</p>
        </li>
      </ul>
    </>
  );
}
