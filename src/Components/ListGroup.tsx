import noteImage from "../assets/Images/Icons_and_logos/note.svg";
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
            <img src={noteImage} alt="note_logo" />
          </span>
          Notes
        </li>
        <li className="liOfListGroup">
          <span className="liLogoOfListGroup">
            <img src={reminderImage} alt="reminder_logo" />
          </span>
          Reminders
        </li>
        <li className="liOfListGroup">
          <span className="liLogoOfListGroup">
            <img src={labelImage} alt="label_logo" />
          </span>
          Labels
        </li>
        <li className="liOfListGroup">
          <span className="liLogoOfListGroup">
            <img src={archiveImage} alt="archive_logo" />
          </span>
          Archive
        </li>
        <li className="liOfListGroup">
          <span className="liLogoOfListGroup">
            <img src={trashImage} alt="trash_logo" />
          </span>
          Trash
        </li>
      </ul>
    </>
  );
}
