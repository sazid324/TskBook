import reminderImage from "../assets/Images/Icons_and_logos/reminder.svg";
import cardBackgroundImage from "../assets/Images/Icons_and_logos/cardBackground.svg";
import labelImage from "../assets/Images/Icons_and_logos/label.svg";
import archiveImage from "../assets/Images/Icons_and_logos/archive.svg";
import attachmentImage from "../assets/Images/Icons_and_logos/attachment.svg";
import threeDotImage from "../assets/Images/Icons_and_logos/threeDot.svg";

export default function Card() {
  const textarea: any = document.getElementsByClassName("bodyOfCard")[0];

  const textareaHeightFunction = (object: any) => {
    let textareaHeight = object.target.scrollHeight;
    textarea.style.height = `${textareaHeight}px`;
    console.log(textareaHeight);
  };

  return (
    <>
      <div className="containerOfCard">
        <div className="upperPartOfCard">
          <input type="text" className="headingOfCard" placeholder="Title" />
          <textarea
            className="bodyOfCard"
            placeholder="Take a note...."
            onKeyDown={textareaHeightFunction}
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
            <img src={labelImage} alt="label-image" />
          </span>
          <span className="elementInLowerPartOfCard">
            <img src={archiveImage} alt="archive-image" />
          </span>
          <span className="elementInLowerPartOfCard">
            <img src={attachmentImage} alt="attachment-image" />
          </span>
          <span className="elementInLowerPartOfCard">
            <img src={threeDotImage} alt="threeDot-image" />
          </span>
        </div>
      </div>
    </>
  );
}
