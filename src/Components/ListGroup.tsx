// Library imports
import { Link, useResolvedPath, useMatch } from "react-router-dom";

// Assets
import noteImage from "../assets/Images/Icons_and_logos/note.svg";
import todo from "../assets/Images/Icons_and_logos/to-do.svg";
import reminderImage from "../assets/Images/Icons_and_logos/reminder.svg";
import labelImage from "../assets/Images/Icons_and_logos/label.svg";
import archiveImage from "../assets/Images/Icons_and_logos/archive.svg";
import trashImage from "../assets/Images/Icons_and_logos/trash.svg";

export default function ListGroup() {
  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <ul className="ul-OfListGroup">
        <ListItem
          imageSource={noteImage}
          imageAlt={"note_logo"}
          sourceLink={"/notes"}
        >
          Notes
        </ListItem>

        <ListItem
          imageSource={todo}
          imageAlt={"to-do_logo"}
          sourceLink={"/todo"}
        >
          To-Do
        </ListItem>

        <ListItem
          imageSource={reminderImage}
          imageAlt={"reminder_logo"}
          sourceLink={"/reminders"}
        >
          Reminders
        </ListItem>

        <ListItem
          imageSource={labelImage}
          imageAlt={"label_logo"}
          sourceLink={"/labels"}
        >
          Labels
        </ListItem>

        <ListItem
          imageSource={archiveImage}
          imageAlt={"archive_logo"}
          sourceLink={"/archive"}
        >
          Archive
        </ListItem>

        <ListItem
          imageSource={trashImage}
          imageAlt={"trash_logo"}
          sourceLink={"/trash"}
        >
          Trash
        </ListItem>
      </ul>
    </>
  );
}

// Custom Interface

interface ListItemElements {
  imageSource: any;
  imageAlt: string;
  sourceLink: any;
  children: string;
}

// Custom funcions

function ListItem({
  imageSource,
  imageAlt,
  sourceLink,
  children,
}: ListItemElements) {
  // Variables
  const resolvedPath: any = useResolvedPath(sourceLink);

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <Link className="link-in-li-OfListGroup" to={sourceLink}>
        <li
          className={
            useMatch({ path: resolvedPath.pathname, end: true })
              ? "li-OfListGroup active"
              : "li-OfListGroup"
          }
        >
          <span className="image-in-li-OfListGroup">
            <img
              className="li-logo-image-OfListGroup"
              src={imageSource}
              alt={imageAlt}
            />
          </span>
          <p className="text-in-li-OfListGroup">{children}</p>
        </li>
      </Link>
    </>
  );
}
