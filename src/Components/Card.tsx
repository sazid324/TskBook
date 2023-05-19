import reminderImage from "../assets/Images/Icons_and_logos/reminder.svg";
import cardBackgroundImage from "../assets/Images/Icons_and_logos/cardBackground.svg";
import archiveImage from "../assets/Images/Icons_and_logos/archive.svg";
import editImage from "../assets/Images/Icons_and_logos/edit.svg";
import attachmentImage from "../assets/Images/Icons_and_logos/attachment.svg";
import threeDotImage from "../assets/Images/Icons_and_logos/threeDot.svg";

interface CardElements {
  indexOfCard: number;
  functionCalledByDeleteButton: () => void;
}

export default function Card({ indexOfCard, functionCalledByDeleteButton }: CardElements) {
  // Adding functionality of Close button in card.

  const functionCalledByCloseButton = (index: number) => {
    const fixedHeadingOfCard: any =
      document.getElementsByClassName("fixedHeadingOfCard")[index];
    const editableHeadingOfCard: any = document.getElementsByClassName(
      "editableHeadingOfCard"
    )[index];
    const fixedBodyOfCard: any =
      document.getElementsByClassName("fixedBodyOfCard")[index];
    const editableBodyOfCard: any =
      document.getElementsByClassName("editableBodyOfCard")[index];
    const closeButtonOfCard: any = document.getElementsByClassName(
      "headerButtonPartOfCard"
    )[index];

    let valueOfEditableHeadingOfCard = editableHeadingOfCard.value;
    fixedHeadingOfCard.innerHTML = valueOfEditableHeadingOfCard;
    let valueOfEditableBodyOfCard = editableBodyOfCard.value;
    fixedBodyOfCard.innerHTML = valueOfEditableBodyOfCard;

    fixedHeadingOfCard.style.display = "block";
    editableHeadingOfCard.style.display = "none";
    fixedBodyOfCard.style.display = "block";
    editableBodyOfCard.style.display = "none";
    closeButtonOfCard.style.display = "none";
  };

  // Adding functionality of Edit button in card.

  const functionCalledByEditButton = (index: number) => {
    const fixedHeadingOfCard: any =
      document.getElementsByClassName("fixedHeadingOfCard")[index];
    const editableHeadingOfCard: any = document.getElementsByClassName(
      "editableHeadingOfCard"
    )[index];
    const fixedBodyOfCard: any =
      document.getElementsByClassName("fixedBodyOfCard")[index];
    const editableBodyOfCard: any =
      document.getElementsByClassName("editableBodyOfCard")[index];
    const closeButtonOfCard: any = document.getElementsByClassName(
      "headerButtonPartOfCard"
    )[index];

    fixedHeadingOfCard.style.display = "none";
    editableHeadingOfCard.style.display = "block";
    fixedBodyOfCard.style.display = "none";
    editableBodyOfCard.style.display = "block";
    closeButtonOfCard.style.display = "block";
  };

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className="containerOfCard">
        <div className="upperPartOfCard">
          <div className="headerWraperOfCard">
            <div className="headerTextPartOfCard">
              {/* Starting of heading part of card. */}
              <div
                className="headingOfCard fixedHeadingOfCard"
                style={{
                  display: "none",
                }}
              ></div>
              <input
                type="text"
                className="headingOfCard editableHeadingOfCard"
                placeholder="Title"
                style={{
                  display: "none",
                }}
              />
              {/* Ending of heading part of card. */}
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
          {/* Starting of body part of card. */}
          <div
            className="bodyOfCard fixedBodyOfCard"
            placeholder="Take a note...."
          ></div>
          <textarea
            className="bodyOfCard editableBodyOfCard"
            placeholder="Take a note...."
            style={{
              display: "none",
            }}
          ></textarea>
          {/* Ending of body part of card. */}
        </div>
        <div className="lowerPartOfCard">
          <span className="elementInLowerPartOfCard">
            <img src={reminderImage} alt="reminder-image" />
          </span>
          <span className="elementInLowerPartOfCard">
            <img src={cardBackgroundImage} alt="cardBackground-image" />
          </span>
          <span className="elementInLowerPartOfCard">
            <img src={archiveImage} alt="archive-image" />
          </span>
          <span
            className="elementInLowerPartOfCard"
            onClick={() => functionCalledByEditButton(indexOfCard)}
          >
            <img src={editImage} alt="edit-image" />
          </span>
          <span className="elementInLowerPartOfCard">
            <img src={attachmentImage} alt="attachment-image" />
          </span>
          <span className="elementInLowerPartOfCard">
            <span className="threeDotMenuOfCard">
              <img src={threeDotImage} alt="threeDot-image" />
              <div className="threeDotItemsWraperInLowerPartOfCard">
                <ul className="threeDotItemsInLowerPartOfCard">
                  <li className="itemInThreeDotInLowerPartOfCard">Add label</li>
                  <li className="itemInThreeDotInLowerPartOfCard">
                    Make a copy
                  </li>
                  <li
                    className="itemInThreeDotInLowerPartOfCard"
                    onClick={functionCalledByDeleteButton}
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
