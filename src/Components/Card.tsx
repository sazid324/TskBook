// Library imports
import { useEffect, useState } from "react";

// Assets
import reminderImage from "../assets/Images/Icons_and_logos/reminder.svg";
import cardBackgroundImage from "../assets/Images/Icons_and_logos/cardBackground.svg";
import archiveImage from "../assets/Images/Icons_and_logos/archive.svg";
import editImage from "../assets/Images/Icons_and_logos/edit.svg";
import attachmentImage from "../assets/Images/Icons_and_logos/attachment.svg";
import threeDotImage from "../assets/Images/Icons_and_logos/threeDot.svg";

interface CardElements {
  newState: any;
  setNewState: any;
  cardArray:any;
  elementOfCard: any;
  indexOfCard: number;
}

export default function Card({
  newState,
  setNewState,cardArray,
  elementOfCard,
  indexOfCard,
}: CardElements) {
  // Hooks
  const [headerValueOnChange, setHeaderValueOnChange] = useState("");
  const [bodyValueOnChange, setBodyValueOnChange] = useState("");

  useEffect(() => {
    const headingOfNewElementOfCard: any =
      document.getElementsByClassName("headingOfCard")[0];
    const bodyOfNewElementOfCard: any =
      document.getElementsByClassName("bodyOfCard")[0];

    if (headingOfNewElementOfCard.value == "") {
      headingOfNewElementOfCard.style.display = "none";
    } else {
      headingOfNewElementOfCard.style.display = "block";
    }
    if (bodyOfNewElementOfCard.value == "") {
      bodyOfNewElementOfCard.style.display = "none";
    } else {
      bodyOfNewElementOfCard.style.display = "block";
    }

    headingOfNewElementOfCard.disabled = true;
    bodyOfNewElementOfCard.disabled = true;
  }, [newState]);

  // Getting value onChange of the input fields of Card component.
  const functionCalledByHeaderOnChange = (event: any) => {
    setHeaderValueOnChange(event.target.value);
  };
  const functionCalledByBodyOnChange = (event: any) => {
    setBodyValueOnChange(event.target.value);
  };

  // Adding functionality of Close button in card.
  const functionCalledByCloseButton = (index: number) => {
    const headingOfCard: any =
      document.getElementsByClassName("headingOfCard")[index];
    const bodyOfCard: any =
      document.getElementsByClassName("bodyOfCard")[index];
    const closeButtonOfCard: any = document.getElementsByClassName(
      "headerButtonPartOfCard"
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
  };

  // Adding functionality of Edit button in card.
  const functionCalledByEditButton = (index: number) => {
    const headingOfCard: any =
      document.getElementsByClassName("headingOfCard")[index];
    const bodyOfCard: any =
      document.getElementsByClassName("bodyOfCard")[index];
    const closeButtonOfCard: any = document.getElementsByClassName(
      "headerButtonPartOfCard"
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
      document.getElementsByClassName("headingOfCard")[index];
    const bodyOfCard: any =
      document.getElementsByClassName("bodyOfCard")[index];

    const headerValue: any = headingOfCard.value;
    const bodyValue: any = bodyOfCard.value;

    const makeACopyOfCard: any = [
      ...newState,
      {
        id: Date.now() + Math.floor(Math.random() * 78),
        headerValue: `${headerValue}`,
        bodyValue: `${bodyValue}`,
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

    cardArray = newReversedArray(newState);
  };

  // Adding functionality of Delete button in card.
  const functionCalledByDeleteButton = (index: number) => {
    const deleteContainerOfCard: any = [...newState];
    deleteContainerOfCard.splice(index, 1);
    setNewState(deleteContainerOfCard);
  };

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className="containerOfCard">
        <div className="upperPartOfCard">
          <div className="headerWraperOfCard">
            <div className="headerTextPartOfCard">
              <input
                type="text"
                className="headingOfCard"
                placeholder="Title"
                style={{
                  display: "none",
                }}
                value={headerValueOnChange || elementOfCard.headerValue || ""}
                onChange={(event: any) => functionCalledByHeaderOnChange(event)}
              />
            </div>
            <div className="headerButtonPartOfCard">
              <button
                className="closeButtonOfCard"
                onClick={() => functionCalledByCloseButton(indexOfCard)}
              >
                Close
              </button>
            </div>
          </div>
          <textarea
            className="bodyOfCard"
            placeholder="Take a note...."
            style={{
              display: "none",
            }}
            value={bodyValueOnChange || elementOfCard.bodyValue || ""}
            onChange={(event: any) => functionCalledByBodyOnChange(event)}
          ></textarea>
        </div>
        <div className="lowerPartOfCard">
          <span className="elementInLowerPartOfCard">
            <img src={reminderImage} alt="reminder-image" />
            <p className="elementTextInLowerPartOfCard">Reminder</p>
          </span>
          <span className="elementInLowerPartOfCard">
            <img src={cardBackgroundImage} alt="cardBackground-image" />
            <p className="elementTextInLowerPartOfCard">Theme</p>
          </span>
          <span className="elementInLowerPartOfCard">
            <img src={archiveImage} alt="archive-image" />
            <p className="elementTextInLowerPartOfCard">Archive</p>
          </span>
          <span
            className="elementInLowerPartOfCard"
            onClick={() => functionCalledByEditButton(indexOfCard)}
          >
            <img src={editImage} alt="edit-image" />
            <p className="elementTextInLowerPartOfCard">Edit</p>
          </span>
          <span className="elementInLowerPartOfCard">
            <img src={attachmentImage} alt="attachment-image" />
            <p className="elementTextInLowerPartOfCard">Attachment</p>
          </span>
          <span className="elementInLowerPartOfCard">
            <span className="threeDotMenuOfCard">
              <img src={threeDotImage} alt="threeDot-image" />
              <div className="threeDotItemsWraperInLowerPartOfCard">
                <ul className="threeDotItemsInLowerPartOfCard">
                  <li className="itemInThreeDotInLowerPartOfCard">Add label</li>
                  <li
                    className="itemInThreeDotInLowerPartOfCard"
                    onClick={() => functionCalledByMakeACopyButton(indexOfCard)}
                  >
                    Make a copy
                  </li>
                  <li
                    className="itemInThreeDotInLowerPartOfCard"
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
          </span>
        </div>
      </div>
    </>
  );
}
