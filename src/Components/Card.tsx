import reminderImage from "../assets/Images/Icons_and_logos/reminder.svg";
import cardBackgroundImage from "../assets/Images/Icons_and_logos/cardBackground.svg";
import archiveImage from "../assets/Images/Icons_and_logos/archive.svg";
import editImage from "../assets/Images/Icons_and_logos/edit.svg";
import attachmentImage from "../assets/Images/Icons_and_logos/attachment.svg";
import threeDotImage from "../assets/Images/Icons_and_logos/threeDot.svg";

interface CardElements {
  elementOfCard: any;
  indexOfCard: number;
  functionCalledByDeleteButton: () => void;
  functionCalledOnChange: () => void;
}

export default function Card({
  elementOfCard,
  indexOfCard,
  functionCalledByDeleteButton,
  functionCalledOnChange,
}: CardElements) {
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
                name="nameOfHeaderOfCard"
                placeholder="Title"
                style={{
                  display: "none",
                }}
                value={elementOfCard.nameOfHeaderOfCard || ""}
                onChange={functionCalledOnChange}
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
            name="nameOfBodyOfCard"
            placeholder="Take a note...."
            style={{
              display: "none",
            }}
            value={elementOfCard.nameOfBodyOfCard || ""}
            onChange={functionCalledOnChange}
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
