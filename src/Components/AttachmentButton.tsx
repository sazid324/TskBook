// Library imports
import { useContext, useRef } from "react";

// Component imports
import { fileUploadContext } from "./Card";

// Assets
import attachmentImage from "../assets/Images/Icons_and_logos/attachment.svg";

// Interfaces
interface attachmentButtonElements {
  indexOfCard: number;
  setFilesUploaded: any;
}

export default function AttachmentButton({
  indexOfCard,
  setFilesUploaded,
}: attachmentButtonElements) {
  // Hooks
  const [uploadedFiles, setUploadedFiles] = useContext<any>(fileUploadContext);
  const attachmentInputField: any = useRef();

  // Adding functionality of Select File button.
  const functionCalledByFileUploadButtonOnClick = (event: any) => {
    const files: any = event.target.files;

    // Converting files object to an array
    let emptyArrayToStoreFiles: any = [];
    emptyArrayToStoreFiles = Object.values(files).map((element: any) => {
      return { name: element.name, type: element.type };
    });

    // Storing files to uploadedFiles variable of useState.
    const newUploadedFiles: any = [...uploadedFiles, emptyArrayToStoreFiles];

    setFilesUploaded(true);

    setUploadedFiles(newUploadedFiles.flat(Infinity));
  };

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className="attachment-button-container-OfCard">
        <img src={attachmentImage} alt="attachment-image" />
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
                onChange={(event) =>
                  functionCalledByFileUploadButtonOnClick(event)
                }
              ></input>
              <span
                className="attachment-input"
                role="button"
                onClick={() => attachmentInputField.current.click()}
              >
                Select Files
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="element-text-in-lower-part-OfCard attachment-button-paragraph-OfCard">
        Attachment
      </p>
      <span className="overlay-on-element-in-lower-part-OfCard"></span>
    </>
  );
}
