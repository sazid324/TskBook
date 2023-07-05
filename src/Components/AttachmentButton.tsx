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
    const middlePartOfCard: any =
      document.getElementsByClassName("middle-part-OfCard")[indexOfCard];

    middlePartOfCard.style.display = "grid";

    const files: any = event.target.files;

    const dataURLOfUploadedFiles: any = [...uploadedFiles];

    Object.values(files).map((element: any) => {
      const reader: any = new FileReader();

      reader.onloadend = () => {
        dataURLOfUploadedFiles.push(reader.result);

        setFilesUploaded(true);

        setUploadedFiles(dataURLOfUploadedFiles);
      };

      reader.readAsDataURL(element);
    });

    event.target.value = "";
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
              <h6 className="attachment-subheader">
                {"( Only Image or, Video Files )"}
              </h6>
              <h4 className="attachment-second-header">or,</h4>
              <input
                ref={attachmentInputField}
                type="file"
                accept="image/*, video/*"
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
