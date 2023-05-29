// Assets
import noteImage from "../assets/Images/Icons_and_logos/note.svg";
import todo from "../assets/Images/Icons_and_logos/to-do.svg";
import reminderImage from "../assets/Images/Icons_and_logos/reminder.svg";
import labelImage from "../assets/Images/Icons_and_logos/label.svg";
import archiveImage from "../assets/Images/Icons_and_logos/archive.svg";
import trashImage from "../assets/Images/Icons_and_logos/trash.svg";

export default function ListGroup() {
  return (
    <>
      <ul className="ul-OfListGroup">
        <li className="li-OfListGroup">
          <span className="image-in-li-OfListGroup">
            <img
              className="li-logo-image-OfListGroup"
              src={noteImage}
              alt="note_logo"
            />
          </span>
          <p className="text-in-li-OfListGroup">Notes</p>
        </li>
        <li className="li-OfListGroup">
          <span className="image-in-li-OfListGroup">
            <img
              className="li-logo-image-OfListGroup"
              src={todo}
              alt="to-do_logo"
            />
          </span>
          <p className="text-in-li-OfListGroup">To-Do</p>
        </li>
        <li className="li-OfListGroup">
          <span className="image-in-li-OfListGroup">
            <img
              className="li-logo-image-OfListGroup"
              src={reminderImage}
              alt="reminder_logo"
            />
          </span>
          <p className="text-in-li-OfListGroup">Reminders</p>
        </li>
        <li className="li-OfListGroup">
          <span className="image-in-li-OfListGroup">
            <img
              className="li-logo-image-OfListGroup"
              src={labelImage}
              alt="label_logo"
            />
          </span>
          <p className="text-in-li-OfListGroup">Labels</p>
        </li>
        <li className="li-OfListGroup">
          <span className="image-in-li-OfListGroup">
            <img
              className="li-logo-image-OfListGroup"
              src={archiveImage}
              alt="archive_logo"
            />
          </span>
          <p className="text-in-li-OfListGroup">Archive</p>
        </li>
        <li className="li-OfListGroup">
          <span className="image-in-li-OfListGroup">
            <img
              className="li-logo-image-OfListGroup"
              src={trashImage}
              alt="trash_logo"
            />
          </span>
          <p className="text-in-li-OfListGroup">Trash</p>
        </li>
      </ul>
    </>
  );
}
