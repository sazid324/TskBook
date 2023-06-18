// Library imports
import { useEffect, useState } from "react";

// Assets
import reminderImage from "../assets/Images/Icons_and_logos/reminder.svg";
import cardBackgroundImage from "../assets/Images/Icons_and_logos/cardBackground.svg";
import archiveImage from "../assets/Images/Icons_and_logos/archive.svg";
import editImage from "../assets/Images/Icons_and_logos/edit.svg";
import attachmentImage from "../assets/Images/Icons_and_logos/attachment.svg";
import threeDotImage from "../assets/Images/Icons_and_logos/threeDot.svg";

// Interfaces
interface CardElements {
  newState: any;
  setNewState: any;
  cardArrayProp: any;
  elementOfCard: any;
  indexOfCard: number;
}

export default function Card({
  newState,
  setNewState,
  // @ts-ignore
  cardArrayProp,
  elementOfCard,
  indexOfCard,
}: CardElements) {
  // Hooks
  const [headerValueOnChange, setHeaderValueOnChange] = useState("");
  const [bodyValueOnChange, setBodyValueOnChange] = useState("");
  const [headerToggolOnChange, setHeaderToggolOnChange] = useState(true);
  const [bodyToggolOnChange, setBodyToggolOnChange] = useState(true);

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

  // Adding functionality of Close button in card.
  const functionCalledByCloseButton = (index: number) => {
    const headingOfCard: any =
      document.getElementsByClassName("heading-OfCard")[index];
    const bodyOfCard: any =
      document.getElementsByClassName("body-OfCard")[index];
    const closeButtonOfCard: any = document.getElementsByClassName(
      "header-button-part-OfCard"
    )[index];

    headingOfCard.disabled = true;
    bodyOfCard.disabled = true;
    closeButtonOfCard.style.display = "none";

    if (headingOfCard.value == "") {
      headingOfCard.style.display = "none";
    }
    if (bodyOfCard.value == "") {
      bodyOfCard.style.display = "none";
    }

    localStorage.setItem(
      "card-notes-in-local-storage",
      JSON.stringify(newState)
    );
  };

  // Adding functionality of Edit button in card.
  const functionCalledByEditButton = (index: number) => {
    const headingOfCard: any =
      document.getElementsByClassName("heading-OfCard")[index];
    const bodyOfCard: any =
      document.getElementsByClassName("body-OfCard")[index];
    const closeButtonOfCard: any = document.getElementsByClassName(
      "header-button-part-OfCard"
    )[index];

    headingOfCard.disabled = false;
    bodyOfCard.disabled = false;
    headingOfCard.style.display = "block";
    bodyOfCard.style.display = "block";
    closeButtonOfCard.style.display = "block";
  };

  // Adding functionality of Make a copy button in card.
  const functionCalledByMakeACopyButton = (index: number) => {
    const headingOfCard: any =
      document.getElementsByClassName("heading-OfCard")[index];
    const bodyOfCard: any =
      document.getElementsByClassName("body-OfCard")[index];

    const makeACopyOfCard: any = [
      ...newState,
      {
        id: Date.now() + Math.floor(Math.random() * 78),
        headerValue: `${headingOfCard.value}`,
        bodyValue: `${bodyOfCard.value}`,
      },
    ];

    setNewState(makeACopyOfCard);

    const newReversedArray = (newStateArray: any) => {
      const newArray: any = [];

      for (let i = newState.length - 1; i >= 0; --i) {
        newArray.push(newStateArray[i]);
      }

      return newArray;
    };

    cardArrayProp = newReversedArray(newState);
  };

  // Adding functionality of Delete button in card.
  const functionCalledByDeleteButton = (index: number) => {
    const deleteContainerOfCard: any = [...newState];
    deleteContainerOfCard.splice(index, 1);
    setNewState(deleteContainerOfCard);
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
          <div className="header-wraper-OfCard">
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
            <div className="header-button-part-OfCard">
              <button
                className="close-button-OfCard"
                onClick={() => functionCalledByCloseButton(indexOfCard)}
              >
                Close
              </button>
            </div>
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
          <button className="element-in-lower-part-OfCard">
            <img src={reminderImage} alt="reminder-image" />
            <p className="element-text-in-lower-part-OfCard">Reminder</p>
          </button>
          <button className="element-in-lower-part-OfCard">
            <img src={cardBackgroundImage} alt="cardBackground-image" />
            <p className="element-text-in-lower-part-OfCard">Theme</p>
          </button>
          <button className="element-in-lower-part-OfCard">
            <img src={archiveImage} alt="archive-image" />
            <p className="element-text-in-lower-part-OfCard">Archive</p>
          </button>
          <button
            className="element-in-lower-part-OfCard"
            onClick={() => functionCalledByEditButton(indexOfCard)}
          >
            <img src={editImage} alt="edit-image" />
            <p className="element-text-in-lower-part-OfCard">Edit</p>
          </button>
          <button className="element-in-lower-part-OfCard">
            <img src={attachmentImage} alt="attachment-image" />
            <p className="element-text-in-lower-part-OfCard">Attachment</p>
          </button>
          <button
            className="element-in-lower-part-OfCard"
            onMouseEnter={() => {
              const morebuttonOfCard: any =
                document.getElementsByClassName("more-button-OfCard")[
                  indexOfCard
                ];
              morebuttonOfCard.style.display = "block";
            }}
            onMouseLeave={() => {
              const morebuttonOfCard: any =
                document.getElementsByClassName("more-button-OfCard")[
                  indexOfCard
                ];
              morebuttonOfCard.style.display = "none";
            }}
          >
            <span className="three-dot-menu-OfCard">
              <img src={threeDotImage} alt="threeDot-image" />
              <div
                className="three-dot-items-wraper-in-lower-part-OfCard"
                onMouseEnter={() => {
                  const morebuttonOfCard: any =
                    document.getElementsByClassName("more-button-OfCard")[
                      indexOfCard
                    ];
                  morebuttonOfCard.style.display = "none";
                }}
              >
                <ul className="three-dot-items-in-lower-part-OfCard">
                  <li className="item-in-three-dot-in-lower-part-OfCard">
                    Add label
                  </li>
                  <li
                    className="item-in-three-dot-in-lower-part-OfCard"
                    onClick={() => functionCalledByMakeACopyButton(indexOfCard)}
                  >
                    Make a copy
                  </li>
                  <li
                    className="item-in-three-dot-in-lower-part-OfCard"
                    onClick={() =>
                      functionCalledByDeleteButton(
                        newState.length - 1 - indexOfCard
                      )
                    }
                  >
                    Delete note
                  </li>
                </ul>
              </div>
            </span>
            <p className="element-text-in-lower-part-OfCard more-button-OfCard">
              More
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
