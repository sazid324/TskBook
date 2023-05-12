import reminderImage from "../assets/Images/Icons_and_logos/reminder.svg";
import cardBackgroundImage from "../assets/Images/Icons_and_logos/cardBackground.svg";
import archiveImage from "../assets/Images/Icons_and_logos/archive.svg";
import editImage from "../assets/Images/Icons_and_logos/edit.svg";
import attachmentImage from "../assets/Images/Icons_and_logos/attachment.svg";
import threeDotImage from "../assets/Images/Icons_and_logos/threeDot.svg";

export default function Card() {
  return (
    <>
      <div className="containerOfCard">
        <div className="upperPartOfCard">
          <input type="text" className="headingOfCard" placeholder="Title" />
          <textarea
            className="bodyOfCard"
            placeholder="Take a note...."
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
          <span className="elementInLowerPartOfCard">
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
                  <li className="itemInThreeDotInLowerPartOfCard">
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
