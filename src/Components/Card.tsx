import reminderImage from "../assets/Images/Icons_and_logos/reminder.svg";
import cardBackgroundImage from "../assets/Images/Icons_and_logos/cardBackground.svg";
import archiveImage from "../assets/Images/Icons_and_logos/archive.svg";
import editImage from "../assets/Images/Icons_and_logos/edit.svg";
import attachmentImage from "../assets/Images/Icons_and_logos/attachment.svg";
import threeDotImage from "../assets/Images/Icons_and_logos/threeDot.svg";

interface CardElements {
  functionCalledByDeleteButton: () => void;
  indexOfCard: number;
}

export default function Card({ functionCalledByDeleteButton, indexOfCard }: CardElements) {
  // Adding functionality of edit button in card.

  const functionCalledByEditButton = (index: number) => {
    const fixedHeadingOfCard: any = document.getElementsByClassName(
      "fixedHeadingOfCard"
    )[index];
    const editableHeadingOfCard: any = document.getElementsByClassName(
      "editableHeadingOfCard"
    )[index];
    const fixedBodyOfCard: any =
      document.getElementsByClassName("fixedBodyOfCard")[index];
    const editableBodyOfCard: any =
      document.getElementsByClassName("editableBodyOfCard")[index];

    fixedHeadingOfCard.style.display = "none";
    editableHeadingOfCard.style.display = "block";
    fixedBodyOfCard.style.display = "none";
    editableBodyOfCard.style.display = "block";
  };

  return (
    <>
      <div className="containerOfCard">
        <div className="upperPartOfCard">
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
