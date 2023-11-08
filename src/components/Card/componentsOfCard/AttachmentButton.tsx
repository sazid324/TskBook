// Library imports
import { useContext, useRef } from "react";
import Image from "next/image";

// CSS imports
import style from "@/components/Card/Card.module.scss";

// Component imports
import { fileUploadContext } from "../Card";

// Assets
import attachmentImage from "../../../../public/assets/Images/Icons/attachment.svg";

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
    // Selecting elements
    const filesOfCard: any =
      document.getElementsByClassName("filesOfCard")[indexOfCard];

    // Applying style on selected elements
    filesOfCard.style.display = "grid";

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
      <div
        className={`${style.attachmentButtonContainerOfCard} attachmentButtonContainerOfCard`}
      >
        <Image src={attachmentImage} alt="attachment-image" />
        <div
          className={`${style.attachmentItemsWraperInLowerPartOfCard} attachmentItemsWraperInLowerPartOfCard`}
          onMouseEnter={() => {
            const themeButtonParagraphOfCard: any =
              document.getElementsByClassName(
                "attachmentButtonParagraphOfCard"
              )[indexOfCard];
            themeButtonParagraphOfCard.style.display = "none";
          }}
        >
          <div
            className={`${style.attachmentElementsInLowerPartOfCard} attachmentElementsInLowerPartOfCard`}
          >
            <div className={`${style.attachmentBox} attachmentBox`}>
              <h4 className={`${style.attachmentHeader} attachmentHeader`}>
                Drop Files Here
              </h4>
              <h6
                className={`${style.attachmentSubheader} attachmentSubheader`}
              >
                {"( Only Image or, Video Files )"}
              </h6>
              <h4
                className={`${style.attachmentSecondHeader} attachmentSecondHeader`}
              >
                or,
              </h4>
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
                className={`${style.attachmentInput} attachmentInput`}
                role="button"
                onClick={() => attachmentInputField.current.click()}
              >
                Select Files
              </span>
            </div>
          </div>
        </div>
      </div>
      <p
        className={`${style.elementTextInLowerPartOfCard} elementTextInLowerPartOfCard attachmentButtonParagraphOfCard`}
      >
        Attachment
      </p>
      <span
        className={`${style.overlayOnElementInLowerPartOfCard} overlayOnElementInLowerPartOfCard`}
      ></span>
    </>
  );
}
