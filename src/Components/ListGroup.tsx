// Library imports
import { useContext } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

// Component imports
import { currentPageContext } from "./App";

// Assets
import noteImage from "../../public/assets/Images/Icons_and_logos/note.svg";
import todoImage from "../../public/assets/Images/Icons_and_logos/to-do.svg";
import reminderImage from "../../public/assets/Images/Icons_and_logos/reminder.svg";
import labelImage from "../../public/assets/Images/Icons_and_logos/label.svg";
import archiveImage from "../../public/assets/Images/Icons_and_logos/archive.svg";
import trashImage from "../../public/assets/Images/Icons_and_logos/trash.svg";

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
          imageSource={todoImage}
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

        <div className="link-in-li-OfListGroup">
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
        </div>

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

interface ListItemCustomElements {
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
}: ListItemCustomElements) {
  // Custom Variables
  const resolvedPath: any = useResolvedPath(sourceLink);

  // Hooks
  // @ts-ignore
  const [currentPage, setCurrentPage] = useContext<any>(currentPageContext);

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
          onClick={() => {
            setCurrentPage(resolvedPath.pathname);
          }}
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
