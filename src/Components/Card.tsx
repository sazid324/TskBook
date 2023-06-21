// Library imports
import { useEffect, useState, useContext } from "react";

// Component imports
import ThreeDotMenu from "./ThreeDotMenu";
import ThemeButton from "./ThemeButton";
import { addNewNoteContext } from "./App";

// Assets
import reminderImage from "../assets/Images/Icons_and_logos/reminder.svg";
import archiveImage from "../assets/Images/Icons_and_logos/archive.svg";
import editImage from "../assets/Images/Icons_and_logos/edit.svg";
import saveImage from "../assets/Images/Icons_and_logos/save.svg";
import attachmentImage from "../assets/Images/Icons_and_logos/attachment.svg";

// Interfaces
interface CardElements {
  elementOfCard: any;
  indexOfCard: number;
}

export default function Card({ elementOfCard, indexOfCard }: CardElements) {
  // Hooks
  const [addNew] = useContext<any>(addNewNoteContext);
  const [headerValueOnChange, setHeaderValueOnChange] = useState("");
  const [bodyValueOnChange, setBodyValueOnChange] = useState("");
  const [headerToggolOnChange, setHeaderToggolOnChange] = useState(true);
  const [bodyToggolOnChange, setBodyToggolOnChange] = useState(true);
  const [editAndSaveButton, setEditAndSaveButton] = useState(true);

  useEffect(() => {
    setHeaderValueOnChange(elementOfCard.headerValue);
    setBodyValueOnChange(elementOfCard.bodyValue);
  }, []);

  useEffect(() => {
    elementOfCard.headerValue = headerValueOnChange;
  }, [headerValueOnChange]);

  useEffect(() => {
    elementOfCard.bodyValue = bodyValueOnChange;
  }, [bodyValueOnChange]);

  useEffect(() => {
    // Setting headerValue and bodyValue of card.
    const headingOfCard: any =
      document.getElementsByClassName("heading-OfCard")[indexOfCard];
    const bodyOfCard: any =
      document.getElementsByClassName("body-OfCard")[indexOfCard];

    elementOfCard.headerValue = headingOfCard.value;
    elementOfCard.bodyValue = bodyOfCard.value;
  }, [indexOfCard]);

  // Adding functionality of Edit and Save button in Card.
  const functionCalledByEditAndSaveButton = (index: number) => {
    const headingOfCard: any =
      document.getElementsByClassName("heading-OfCard")[index];
    const bodyOfCard: any =
      document.getElementsByClassName("body-OfCard")[index];
    const editAndSaveButtonOfCard: any = document.getElementsByClassName(
      "edit-and-save-button-OfCard"
    )[index];
    const editElementTextInLowerPartOfCard: any =
      document.getElementsByClassName("edit-element-text-in-lower-part-OfCard")[
        index
      ];

    if (editAndSaveButton == false) {
      headingOfCard.disabled = true;
      bodyOfCard.disabled = true;

      if (headingOfCard.value == "") {
        headingOfCard.style.display = "none";
      }
      if (bodyOfCard.value == "") {
        bodyOfCard.style.display = "none";
      }

      editAndSaveButtonOfCard.src = `${editImage}`;
      editElementTextInLowerPartOfCard.innerHTML = "Edit";

      localStorage.setItem(
        "card-notes-in-local-storage",
        JSON.stringify(addNew)
      );
    }

    if (editAndSaveButton == true) {
      headingOfCard.disabled = false;
      bodyOfCard.disabled = false;
      headingOfCard.style.display = "block";
      bodyOfCard.style.display = "block";
      editAndSaveButtonOfCard.src = `${saveImage}`;
      editElementTextInLowerPartOfCard.innerHTML = "Save";
    }

    setEditAndSaveButton(!editAndSaveButton);
  };

  // Getting value onChange of the inputs of Card component.
  const functionCalledByHeaderOnChange = (event: any) => {
    setHeaderValueOnChange(event.target.value);

    if (headerToggolOnChange == true) {
      setHeaderToggolOnChange(!headerToggolOnChange);
    }
  };

  const functionCalledByBodyOnChange = (event: any) => {
    setBodyValueOnChange(event.target.value);

    if (bodyToggolOnChange == true) {
      setBodyToggolOnChange(!bodyToggolOnChange);
    }
  };

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className="container-OfCard">
        <div className="upper-part-OfCard">
          <div className="header-text-part-OfCard">
            <input
              type="text"
              className="heading-OfCard"
              placeholder="Title"
              value={
                headerToggolOnChange == true
                  ? elementOfCard.headerValue
                  : headerValueOnChange || ""
              }
              onChange={(event: any) => functionCalledByHeaderOnChange(event)}
            />
          </div>
          <textarea
            className="body-OfCard"
            placeholder="Take a note...."
            value={
              bodyToggolOnChange == true
                ? elementOfCard.bodyValue
                : bodyValueOnChange || ""
            }
            onChange={(event: any) => functionCalledByBodyOnChange(event)}
          ></textarea>
        </div>
        <div className="lower-part-OfCard">
          <button
            className="element-in-lower-part-OfCard"
            onMouseEnter={() => {
              const containerOfCard: any =
                document.getElementsByClassName("container-OfCard")[
                  indexOfCard
                ];
              containerOfCard.style.cssText = "overflow: visible";
              containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
            }}
            onMouseLeave={() => {
              const containerOfCard: any =
                document.getElementsByClassName("container-OfCard")[
                  indexOfCard
                ];
              containerOfCard.style.cssText = "overflow: hidden";
              containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
            }}
          >
            <img src={reminderImage} alt="reminder-image" />
            <p className="element-text-in-lower-part-OfCard">Reminder</p>
            <span className="overlay-on-element-in-lower-part-OfCard"></span>
          </button>

          <button
            className="element-in-lower-part-OfCard"
            onClick={() => {
              const themeButtonOfCard: any = document.getElementsByClassName(
                "theme-button-OfCard"
              )[indexOfCard];
              themeButtonOfCard.style.display = "none";
            }}
            onMouseEnter={() => {
              const containerOfCard: any =
                document.getElementsByClassName("container-OfCard")[
                  indexOfCard
                ];
              containerOfCard.style.cssText = "overflow: visible";
              containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

              const themeButtonOfCard: any = document.getElementsByClassName(
                "theme-button-OfCard"
              )[indexOfCard];
              themeButtonOfCard.style.display = "block";
            }}
            onMouseLeave={() => {
              const containerOfCard: any =
                document.getElementsByClassName("container-OfCard")[
                  indexOfCard
                ];
              containerOfCard.style.cssText = "overflow: hidden";
              containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

              const themeButtonOfCard: any = document.getElementsByClassName(
                "theme-button-OfCard"
              )[indexOfCard];
              themeButtonOfCard.style.display = "none";
            }}
          >
            <ThemeButton
              elementOfCard={elementOfCard}
              indexOfCard={indexOfCard}
            />
          </button>

          <button
            className="element-in-lower-part-OfCard"
            onMouseEnter={() => {
              const containerOfCard: any =
                document.getElementsByClassName("container-OfCard")[
                  indexOfCard
                ];
              containerOfCard.style.cssText = "overflow: visible";
              containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
            }}
            onMouseLeave={() => {
              const containerOfCard: any =
                document.getElementsByClassName("container-OfCard")[
                  indexOfCard
                ];
              containerOfCard.style.cssText = "overflow: hidden";
              containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
            }}
          >
            <img src={archiveImage} alt="archive-image" />
            <p className="element-text-in-lower-part-OfCard">Archive</p>
            <span className="overlay-on-element-in-lower-part-OfCard"></span>
          </button>

          <button
            className="element-in-lower-part-OfCard"
            onMouseEnter={() => {
              const containerOfCard: any =
                document.getElementsByClassName("container-OfCard")[
                  indexOfCard
                ];
              containerOfCard.style.cssText = "overflow: visible";
              containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
            }}
            onMouseLeave={() => {
              const containerOfCard: any =
                document.getElementsByClassName("container-OfCard")[
                  indexOfCard
                ];
              containerOfCard.style.cssText = "overflow: hidden";
              containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
            }}
          >
            <img src={attachmentImage} alt="attachment-image" />
            <p className="element-text-in-lower-part-OfCard">Attachment</p>
            <span className="overlay-on-element-in-lower-part-OfCard"></span>
          </button>

          <button
            className="element-in-lower-part-OfCard"
            onClick={() => {
              functionCalledByEditAndSaveButton(indexOfCard);
            }}
            onMouseEnter={() => {
              const containerOfCard: any =
                document.getElementsByClassName("container-OfCard")[
                  indexOfCard
                ];
              containerOfCard.style.cssText = "overflow: visible";
              containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
            }}
            onMouseLeave={() => {
              const containerOfCard: any =
                document.getElementsByClassName("container-OfCard")[
                  indexOfCard
                ];
              containerOfCard.style.cssText = "overflow: hidden";
              containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
            }}
          >
            <img
              className="edit-and-save-button-OfCard"
              src={editImage}
              alt="edit-image"
            />
            <p className="element-text-in-lower-part-OfCard edit-element-text-in-lower-part-OfCard">
              Edit
            </p>
            <span className="overlay-on-element-in-lower-part-OfCard"></span>
          </button>

          <button
            className="element-in-lower-part-OfCard"
            onClick={() => {
              const morebuttonOfCard: any =
                document.getElementsByClassName("more-button-OfCard")[
                  indexOfCard
                ];
              morebuttonOfCard.style.display = "none";
            }}
            onMouseEnter={() => {
              const containerOfCard: any =
                document.getElementsByClassName("container-OfCard")[
                  indexOfCard
                ];
              containerOfCard.style.cssText = "overflow: visible";
              containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

              const morebuttonOfCard: any =
                document.getElementsByClassName("more-button-OfCard")[
                  indexOfCard
                ];
              morebuttonOfCard.style.display = "block";
            }}
            onMouseLeave={() => {
              const containerOfCard: any =
                document.getElementsByClassName("container-OfCard")[
                  indexOfCard
                ];
              containerOfCard.style.cssText = "overflow: hidden";
              containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

              const morebuttonOfCard: any =
                document.getElementsByClassName("more-button-OfCard")[
                  indexOfCard
                ];
              morebuttonOfCard.style.display = "none";
            }}
          >
            <ThreeDotMenu
              elementOfCard={elementOfCard}
              indexOfCard={indexOfCard}
            />
          </button>
        </div>
      </div>
    </>
  );
}
