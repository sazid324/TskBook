"use client";

// Library imports
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// CSS imports
import style from "@/layouts/ListGroup/ListGroup.module.scss";

// Assets
import noteImage from "@/assets/Images/Icons/note.svg";
import todoImage from "@/assets/Images/Icons/to-do.svg";
import reminderImage from "@/assets/Images/Icons/reminder.svg";
import labelImage from "@/assets/Images/Icons/label.svg";
import archiveImage from "@/assets/Images/Icons/archive.svg";
import trashImage from "@/assets/Images/Icons/trash.svg";

export default function ListGroup() {
  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <ul className={`${style.ulOfListGroup} ulOfListGroup`}>
        <ListItem
          imageSource={noteImage}
          imageAlt={"note_logo"}
          sourceLink={"/"}
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

        <div className={`${style.linkInLiOfListGroup} linkInLiOfListGroup`}>
          <li className={`${style.liOfListGroup} liOfListGroup`}>
            <span
              className={`${style.imageInLiOfListGroup} imageInLiOfListGroup`}
            >
              <Image
                className={`${style.liLogoImageOfListGroup} liLogoImageOfListGroup`}
                src={labelImage}
                alt="label_logo"
              />
            </span>
            <p className={`${style.textInLiOfListGroup} textInLiOfListGroup`}>
              Labels
            </p>
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
  imageSource: string;
  imageAlt: string;
  sourceLink: string;
  children: string;
}

// Custom funcions
function ListItem({
  imageSource,
  imageAlt,
  sourceLink,
  children,
}: ListItemCustomElements) {
  // Hooks
  const pathName = usePathname();

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <Link
        className={`${style.linkInLiOfListGroup} linkInLiOfListGroup`}
        href={sourceLink}
      >
        <li
          className={
            pathName === sourceLink
              ? `${style.liOfListGroup} liOfListGroup ${style.active}`
              : `${style.liOfListGroup} liOfListGroup`
          }
        >
          <span
            className={`${style.imageInLiOfListGroup} imageInLiOfListGroup`}
          >
            <Image
              className={`${style.liLogoImageOfListGroup} liLogoImageOfListGroup`}
              src={imageSource}
              alt={imageAlt}
            />
          </span>
          <p className={`${style.textInLiOfListGroup} textInLiOfListGroup`}>
            {children}
          </p>
        </li>
      </Link>
    </>
  );
}
