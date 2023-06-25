// Library imports
import { useEffect, useState, useContext, createContext } from "react";

// Component imports
import ThreeDotMenu from "./ThreeDotMenu";
import ThemeButton from "./ThemeButton";
import AttachmentButton from "./AttachmentButton";
import { addNewNoteContext } from "./App";

// Component exports
export const fileUploadContext: any = createContext(null);

// Assets
import reminderImage from "../assets/Images/Icons_and_logos/reminder.svg";
import archiveImage from "../assets/Images/Icons_and_logos/archive.svg";
import editImage from "../assets/Images/Icons_and_logos/edit.svg";
import saveImage from "../assets/Images/Icons_and_logos/save.svg";

// Interfaces
interface CardElements {
  elementOfCard: any;
  indexOfCard: number;
}

export default function Card({ elementOfCard, indexOfCard }: CardElements) {
  // Hooks
  const [addNew] = useContext<any>(addNewNoteContext);
  const [headerValueOnChange, setHeaderValueOnChange] = useState("");
  const [bodyValueOnChange, setBodyValueOnChange] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [headerToggolOnChange, setHeaderToggolOnChange] = useState(true);
  const [bodyToggolOnChange, setBodyToggolOnChange] = useState(true);
  const [filesUploaded, setFilesUploaded] = useState(false);
  const [editAndSaveButton, setEditAndSaveButton] = useState(true);

  useEffect(() => {
    setHeaderValueOnChange(elementOfCard.headerValue);
    setBodyValueOnChange(elementOfCard.bodyValue);
  }, []);

  useEffect(() => {
    elementOfCard.headerValue = headerValueOnChange;
  }, [headerValueOnChange]);

  useEffect(() => {
    elementOfCard.bodyValue = bodyValueOnChange;
  }, [bodyValueOnChange]);

  useEffect(() => {
    if (filesUploaded == true) {
      setFilesUploaded(false);

      elementOfCard.files = uploadedFiles;

      localStorage.setItem(
        "card-notes-in-local-storage",
        JSON.stringify(addNew)
      );
    }
  }, [uploadedFiles]);

  useEffect(() => {
    // Setting headerValue and bodyValue of card.
    const headingOfCard: any =
      document.getElementsByClassName("heading-OfCard")[indexOfCard];
    const bodyOfCard: any =
      document.getElementsByClassName("body-OfCard")[indexOfCard];

    elementOfCard.headerValue = headingOfCard.value;
    elementOfCard.bodyValue = bodyOfCard.value;
  }, [indexOfCard]);

  // Adding functionality of Edit and Save button in Card.
  const functionCalledByEditAndSaveButton = (index: number) => {
    const headingOfCard: any =
      document.getElementsByClassName("heading-OfCard")[index];
    const bodyOfCard: any =
      document.getElementsByClassName("body-OfCard")[index];
    const editAndSaveButtonOfCard: any = document.getElementsByClassName(
      "edit-and-save-button-OfCard"
    )[index];
    const editElementTextInLowerPartOfCard: any =
      document.getElementsByClassName("edit-element-text-in-lower-part-OfCard")[
        index
      ];

    if (editAndSaveButton == false) {
      headingOfCard.disabled = true;
      bodyOfCard.disabled = true;

      if (headingOfCard.value == "") {
        headingOfCard.style.display = "none";
      }
      if (bodyOfCard.value == "") {
        bodyOfCard.style.display = "none";
      }

      editAndSaveButtonOfCard.src = `${editImage}`;
      editElementTextInLowerPartOfCard.innerHTML = "Edit";

      localStorage.setItem(
        "card-notes-in-local-storage",
        JSON.stringify(addNew)
      );
    }

    if (editAndSaveButton == true) {
      headingOfCard.disabled = false;
      bodyOfCard.disabled = false;
      headingOfCard.style.display = "block";
      bodyOfCard.style.display = "block";
      editAndSaveButtonOfCard.src = `${saveImage}`;
      editElementTextInLowerPartOfCard.innerHTML = "Save";
    }

    setEditAndSaveButton(!editAndSaveButton);
  };

  // Getting value onChange of the inputs of Card component.
  const functionCalledByHeaderOnChange = (event: any) => {
    setHeaderValueOnChange(event.target.value);

    if (headerToggolOnChange == true) {
      setHeaderToggolOnChange(!headerToggolOnChange);
    }
  };

  const functionCalledByBodyOnChange = (event: any) => {
    setBodyValueOnChange(event.target.value);

    if (bodyToggolOnChange == true) {
      setBodyToggolOnChange(!bodyToggolOnChange);
    }
  };

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <fileUploadContext.Provider value={[uploadedFiles, setUploadedFiles]}>
        <div
          className="container-OfCard"
          onMouseEnter={() => {
            const overlayOnLowerPartOfCard: any =
              document.getElementsByClassName("overlay-on-lower-part-OfCard")[
                indexOfCard
              ];

            setTimeout(() => {
              overlayOnLowerPartOfCard.style.display = "none";
            }, 600);
          }}
          onMouseLeave={() => {
            const overlayOnLowerPartOfCard: any =
              document.getElementsByClassName("overlay-on-lower-part-OfCard")[
                indexOfCard
              ];

            overlayOnLowerPartOfCard.style.display = "block";
          }}
          onDragOver={(event) => {
            event.preventDefault();

            const dragAndDropOverlayOnUpperPartOfCard: any =
              document.getElementsByClassName(
                "drag-and-drop-overlay-on-upper-part-OfCard"
              )[indexOfCard];
            const dragAndDropSecondOverlayOnUpperPartOfCard: any =
              document.getElementsByClassName(
                "drag-and-drop-second-overlay-on-upper-part-OfCard"
              )[indexOfCard];

            dragAndDropOverlayOnUpperPartOfCard.style.display = "block";
            dragAndDropSecondOverlayOnUpperPartOfCard.style.display = "block";
          }}
        >
          <div className="upper-part-OfCard">
            <div className="header-text-part-OfCard">
              <input
                type="text"
                className="heading-OfCard"
                placeholder="Title"
                value={
                  headerToggolOnChange == true
                    ? elementOfCard.headerValue
                    : headerValueOnChange || ""
                }
                onChange={(event: any) => functionCalledByHeaderOnChange(event)}
              />
            </div>

            {/* {uploadedFiles.map((element: any, index: number) => {
              return (
                <embed
                  key={index}
                  className="files-OfCard"
                  src={element.name}
                />
              );
            })} */}

            <textarea
              className="body-OfCard"
              placeholder="Take a note...."
              value={
                bodyToggolOnChange == true
                  ? elementOfCard.bodyValue
                  : bodyValueOnChange || ""
              }
              onChange={(event: any) => functionCalledByBodyOnChange(event)}
            ></textarea>
          </div>
          <div className="lower-part-OfCard">
            <div className="lower-part-container-OfCard">
              <button
                className="element-in-lower-part-OfCard"
                onMouseEnter={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: visible";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
                }}
                onMouseLeave={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: hidden";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
                }}
              >
                <img src={reminderImage} alt="reminder-image" />
                <p className="element-text-in-lower-part-OfCard">Reminder</p>
                <span className="overlay-on-element-in-lower-part-OfCard"></span>
              </button>

              <button
                className="element-in-lower-part-OfCard"
                onClick={() => {
                  const themeItemsWraperInLowerPartOfCard: any =
                    document.getElementsByClassName(
                      "theme-items-wraper-in-lower-part-OfCard"
                    )[indexOfCard];
                  themeItemsWraperInLowerPartOfCard.style.display = "block";

                  const themeButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "theme-button-paragraph-OfCard"
                    )[indexOfCard];
                  themeButtonParagraphOfCard.style.display = "none";
                }}
                onMouseEnter={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: visible";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

                  const themeButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "theme-button-paragraph-OfCard"
                    )[indexOfCard];
                  themeButtonParagraphOfCard.style.display = "block";
                }}
                onMouseLeave={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: hidden";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

                  const themeItemsWraperInLowerPartOfCard: any =
                    document.getElementsByClassName(
                      "theme-items-wraper-in-lower-part-OfCard"
                    )[indexOfCard];
                  themeItemsWraperInLowerPartOfCard.style.display = "none";

                  const themeButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "theme-button-paragraph-OfCard"
                    )[indexOfCard];
                  themeButtonParagraphOfCard.style.display = "none";
                }}
              >
                <ThemeButton
                  elementOfCard={elementOfCard}
                  indexOfCard={indexOfCard}
                />
              </button>

              <button
                className="element-in-lower-part-OfCard"
                onMouseEnter={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: visible";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
                }}
                onMouseLeave={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: hidden";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
                }}
              >
                <img src={archiveImage} alt="archive-image" />
                <p className="element-text-in-lower-part-OfCard">Archive</p>
                <span className="overlay-on-element-in-lower-part-OfCard"></span>
              </button>

              <button
                className="element-in-lower-part-OfCard"
                onClick={() => {
                  const attachmentItemsWraperInLowerPartOfCard: any =
                    document.getElementsByClassName(
                      "attachment-items-wraper-in-lower-part-OfCard"
                    )[indexOfCard];
                  attachmentItemsWraperInLowerPartOfCard.style.display =
                    "block";
                }}
                onMouseEnter={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: visible";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
                }}
                onMouseLeave={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: hidden";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

                  const attachmentItemsWraperInLowerPartOfCard: any =
                    document.getElementsByClassName(
                      "attachment-items-wraper-in-lower-part-OfCard"
                    )[indexOfCard];
                  attachmentItemsWraperInLowerPartOfCard.style.display = "none";
                }}
              >
                <AttachmentButton
                  indexOfCard={indexOfCard}
                  setFilesUploaded={setFilesUploaded}
                />
              </button>

              <button
                className="element-in-lower-part-OfCard"
                onClick={() => {
                  functionCalledByEditAndSaveButton(indexOfCard);
                }}
                onMouseEnter={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: visible";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
                }}
                onMouseLeave={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: hidden";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
                }}
              >
                <img
                  className="edit-and-save-button-OfCard"
                  src={editImage}
                  alt="edit-image"
                />
                <p className="element-text-in-lower-part-OfCard edit-element-text-in-lower-part-OfCard">
                  Edit
                </p>
                <span className="overlay-on-element-in-lower-part-OfCard"></span>
              </button>

              <button
                className="element-in-lower-part-OfCard"
                onClick={() => {
                  const threeDotItemsWraperInLowerPartOfCard: any =
                    document.getElementsByClassName(
                      "three-dot-items-wraper-in-lower-part-OfCard"
                    )[indexOfCard];
                  threeDotItemsWraperInLowerPartOfCard.style.display = "block";

                  const morebuttonOfCard: any = document.getElementsByClassName(
                    "more-button-paragraph-OfCard"
                  )[indexOfCard];
                  morebuttonOfCard.style.display = "none";
                }}
                onMouseEnter={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: visible";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

                  const morebuttonOfCard: any = document.getElementsByClassName(
                    "more-button-paragraph-OfCard"
                  )[indexOfCard];
                  morebuttonOfCard.style.display = "block";
                }}
                onMouseLeave={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: hidden";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

                  const threeDotItemsWraperInLowerPartOfCard: any =
                    document.getElementsByClassName(
                      "three-dot-items-wraper-in-lower-part-OfCard"
                    )[indexOfCard];
                  threeDotItemsWraperInLowerPartOfCard.style.display = "none";

                  const morebuttonOfCard: any = document.getElementsByClassName(
                    "more-button-paragraph-OfCard"
                  )[indexOfCard];
                  morebuttonOfCard.style.display = "none";
                }}
              >
                <ThreeDotMenu
                  elementOfCard={elementOfCard}
                  indexOfCard={indexOfCard}
                />
              </button>
              <span className="overlay-on-lower-part-OfCard"></span>
            </div>
          </div>
          <div className="drag-and-drop-overlay-on-upper-part-OfCard">
            <span className="drag-and-drop-box">
              <h3 className="drag-and-drop-overlay-text">Drop Files Here</h3>
            </span>
          </div>
          <div
            className="drag-and-drop-second-overlay-on-upper-part-OfCard"
            onDragLeave={() => {
              const dragAndDropOverlayOnUpperPartOfCard: any =
                document.getElementsByClassName(
                  "drag-and-drop-overlay-on-upper-part-OfCard"
                )[indexOfCard];
              const dragAndDropSecondOverlayOnUpperPartOfCard: any =
                document.getElementsByClassName(
                  "drag-and-drop-second-overlay-on-upper-part-OfCard"
                )[indexOfCard];

              dragAndDropOverlayOnUpperPartOfCard.style.display = "none";
              dragAndDropSecondOverlayOnUpperPartOfCard.style.display = "none";
            }}
            onDrop={(event) => {
              const dragAndDropOverlayOnUpperPartOfCard: any =
                document.getElementsByClassName(
                  "drag-and-drop-overlay-on-upper-part-OfCard"
                )[indexOfCard];
              const dragAndDropSecondOverlayOnUpperPartOfCard: any =
                document.getElementsByClassName(
                  "drag-and-drop-second-overlay-on-upper-part-OfCard"
                )[indexOfCard];

              dragAndDropOverlayOnUpperPartOfCard.style.display = "none";
              dragAndDropSecondOverlayOnUpperPartOfCard.style.display = "none";

              event.preventDefault();

              const files: any = event.dataTransfer.files;

              // Converting files object to an array
              let emptyArrayToStoreFiles: any = [];
              emptyArrayToStoreFiles = Object.values(files).map(
                (element: any) => {
                  return { name: element.name, type: element.type };
                }
              );

              // Storing files to uploadedFiles variable of useState.
              const newUploadedFiles: any = [
                ...uploadedFiles,
                emptyArrayToStoreFiles,
              ];

              setFilesUploaded(true);

              setUploadedFiles(newUploadedFiles.flat(Infinity));
            }}
          ></div>
        </div>
      </fileUploadContext.Provider>
    </>
  );
}
