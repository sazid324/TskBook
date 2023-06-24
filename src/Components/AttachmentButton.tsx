// Library imports
import { useContext, useRef } from "react";

// Component imports
import { fileUploadContext } from "./App";

// Assets
import attachmentImage from "../assets/Images/Icons_and_logos/attachment.svg";

// Interfaces
interface attachmentButtonElements {
  indexOfCard: number;
}

export default function AttachmentButton({
  indexOfCard,
}: attachmentButtonElements) {
  // Hooks
  const [uploadedFiles, setUploadedFiles] = useContext<any>(fileUploadContext);
  const attachmentInputField: any = useRef();

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className="attachment-button-container-OfCard">
        <img src={attachmentImage} alt="attachment-image" />
        {uploadedFiles ? (
          uploadedFiles
        ) : (
          <div
            className="attachment-items-wraper-in-lower-part-OfCard"
            onMouseEnter={() => {
              const themeButtonParagraphOfCard: any =
                document.getElementsByClassName(
                  "attachment-button-paragraph-OfCard"
                )[indexOfCard];
              themeButtonParagraphOfCard.style.display = "none";
            }}
          >
            <div className="attachment-elements-in-lower-part-OfCard">
              <div className="attachment-box">
                <h4 className="attachment-header">Drop Files Here</h4>
                <h4 className="attachment-second-header">or,</h4>
                <input
                  ref={attachmentInputField}
                  type="file"
                  multiple
                  hidden
                ></input>
                <span
                  className="attachment-input"
                  onClick={()=> attachmentInputField.current.click()}
                >
                  Select Files
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <p className="element-text-in-lower-part-OfCard attachment-button-paragraph-OfCard">
        Attachment
      </p>
      <span className="overlay-on-element-in-lower-part-OfCard"></span>
    </>
  );
}
