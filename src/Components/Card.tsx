// Library imports
import { useEffect, useState, useContext, createContext } from "react";

// Component imports
import ReminderButton from "./ReminderButton";
import ThreeDotMenu from "./ThreeDotMenu";
import ThemeButton from "./ThemeButton";
import AttachmentButton from "./AttachmentButton";
import { addNewNoteContext } from "../Pages/Notes";

// Component exports
export const fileUploadContext: any = createContext(null);

// Assets
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
  const [headerValueOnChange, setHeaderValueOnChange] = useState(() => {
    return elementOfCard.headerValue ? elementOfCard.headerValue : "";
  });
  const [bodyValueOnChange, setBodyValueOnChange] = useState(() => {
    return elementOfCard.bodyValue ? elementOfCard.bodyValue : "";
  });
  const [uploadedFiles, setUploadedFiles] = useState(() => {
    return elementOfCard.files ? elementOfCard.files : [];
  });
  const [headerToggolOnChange, setHeaderToggolOnChange] = useState(true);
  const [bodyToggolOnChange, setBodyToggolOnChange] = useState(true);
  const [filesUploaded, setFilesUploaded] = useState(false);
  const [editAndSaveButton, setEditAndSaveButton] = useState(false);

  useEffect(() => {
    const fileOfCard: any =
      document.getElementsByClassName("file-OfCard")[indexOfCard];

    if (elementOfCard.files != "") {
      fileOfCard.style.display = "grid";
    } else {
      fileOfCard.style.display = "none";
    }
  }, []);

  useEffect(() => {
    elementOfCard.headerValue = headerValueOnChange;
  }, [headerValueOnChange]);

  useEffect(() => {
    elementOfCard.bodyValue = bodyValueOnChange;
  }, [bodyValueOnChange]);

  useEffect(() => {
    // Saving uploaded files to local storage.
    if (filesUploaded == true) {
      setFilesUploaded(false);

      elementOfCard.files = uploadedFiles;
    }

    localStorage.setItem("card-notes-in-local-storage", JSON.stringify(addNew));
  }, [uploadedFiles]);

  // Adding functionality of Edit and Save button in Card.
  useEffect(() => {
    const containerOfCard: any =
      document.getElementsByClassName("container-OfCard")[indexOfCard];
    const upperPartOfCard: any =
      document.getElementsByClassName("upper-part-OfCard")[indexOfCard];
    const shadowPartOfCard: any =
      document.getElementsByClassName("shadow-part-OfCard")[indexOfCard];
    const LowerPartOfCard: any =
      document.getElementsByClassName("lower-part-OfCard")[indexOfCard];
    const headingOfCard: any =
      document.getElementsByClassName("heading-OfCard")[indexOfCard];
    const bodyOfCard: any =
      document.getElementsByClassName("body-OfCard")[indexOfCard];
    const editAndSaveButtonOfCard: any = document.getElementsByClassName(
      "edit-and-save-button-OfCard"
    )[indexOfCard];
    const editElementTextInLowerPartOfCard: any =
      document.getElementsByClassName("edit-element-text-in-lower-part-OfCard")[
        indexOfCard
      ];
    const popUpOverlay: any =
      document.getElementsByClassName("pop-up-overlay")[indexOfCard];

    if (editAndSaveButton == false) {
      headingOfCard.disabled = true;
      bodyOfCard.disabled = true;
      shadowPartOfCard.style.cssText = `display: block; background: linear-gradient(to bottom, transparent, ${elementOfCard.color} 90%);`;

      if (headingOfCard.value == "") {
        headingOfCard.style.display = "none";
      }

      if (bodyOfCard.value == "") {
        bodyOfCard.style.display = "none";
      }

      upperPartOfCard.style.height = "100%";
      popUpOverlay.style.display = "none";

      editAndSaveButtonOfCard.src = `${editImage}`;
      editElementTextInLowerPartOfCard.innerHTML = "Edit";

      headingOfCard.scrollIntoView();

      localStorage.setItem(
        "card-notes-in-local-storage",
        JSON.stringify(addNew)
      );

      bodyOfCard.style.height = `${bodyOfCard.scrollHeight}px`;
    }

    if (editAndSaveButton == true) {
      headingOfCard.disabled = false;
      bodyOfCard.disabled = false;
      headingOfCard.style.display = "block";
      bodyOfCard.style.display = "block";
      shadowPartOfCard.style.display = "none";
      popUpOverlay.style.display = "block";
      editAndSaveButtonOfCard.src = `${saveImage}`;
      editElementTextInLowerPartOfCard.innerHTML = "Save";

      upperPartOfCard.style.cssText = `height: ${
        containerOfCard.clientHeight - LowerPartOfCard.clientHeight - 15
      }px`;
      bodyOfCard.style.height = `${bodyOfCard.scrollHeight}px`;
    }
  }, [editAndSaveButton]);

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

    const bodyOfCard: any =
      document.getElementsByClassName("body-OfCard")[indexOfCard];

    bodyOfCard.style.height = `${bodyOfCard.scrollHeight}px`;
  };

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <fileUploadContext.Provider value={[uploadedFiles, setUploadedFiles]}>
        <div
          className={
            editAndSaveButton == false
              ? "container-OfCard"
              : "container-OfCard pop-up-inEditMode"
          }
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

            <div className="file-OfCard">
              {elementOfCard.files.map((element: any, index: number) => {
                return (
                  <div key={index} className="files-container">
                    <embed className="files-OfCard" src={element} />
                  </div>
                );
              })}
            </div>

            <textarea
              className="body-OfCard"
              placeholder="Take a note...."
              value={
                bodyToggolOnChange == true
                  ? elementOfCard.bodyValue
                  : bodyValueOnChange || ""
              }
              onChange={(event: any) => functionCalledByBodyOnChange(event)}
              onKeyUp={() => {
                const upperPartOfCard: any =
                  document.getElementsByClassName("upper-part-OfCard")[
                    indexOfCard
                  ];
                const bodyOfCard: any =
                  document.getElementsByClassName("body-OfCard")[indexOfCard];

                if (
                  bodyOfCard.selectionStart == bodyOfCard.value.length &&
                  bodyOfCard.selectionEnd == bodyOfCard.value.length
                ) {
                  upperPartOfCard.scrollTo(0, upperPartOfCard.scrollHeight);
                }
              }}
            ></textarea>
          </div>
          <div className="shadow-part-OfCard"></div>
          <div className="lower-part-OfCard">
            <div className="lower-part-container-OfCard">
              <button
                className="element-in-lower-part-OfCard"
                onClick={() => {
                  const reminderContentWraperInLowerPartOfCard: any =
                    document.getElementsByClassName(
                      "reminder-content-wraper-in-lower-part-OfCard"
                    )[indexOfCard];
                  reminderContentWraperInLowerPartOfCard.style.display =
                    "block";

                  const reminderButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "reminder-button-paragraph-OfCard"
                    )[indexOfCard];
                  reminderButtonParagraphOfCard.style.display = "none";
                }}
                onMouseEnter={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: visible";

                  const reminderButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "reminder-button-paragraph-OfCard"
                    )[indexOfCard];
                  reminderButtonParagraphOfCard.style.display = "block";
                }}
                onMouseLeave={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: hidden";

                  const reminderContentWraperInLowerPartOfCard: any =
                    document.getElementsByClassName(
                      "reminder-content-wraper-in-lower-part-OfCard"
                    )[indexOfCard];
                  reminderContentWraperInLowerPartOfCard.style.display = "none";

                  const reminderButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "reminder-button-paragraph-OfCard"
                    )[indexOfCard];
                  reminderButtonParagraphOfCard.style.display = "none";
                }}
              >
                <ReminderButton
                  indexOfCard={indexOfCard}
                  elementOfCard={elementOfCard}
                />
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
                  setEditAndSaveButton(!editAndSaveButton);
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
              const fileOfCard: any =
                document.getElementsByClassName("file-OfCard")[indexOfCard];
              const dragAndDropOverlayOnUpperPartOfCard: any =
                document.getElementsByClassName(
                  "drag-and-drop-overlay-on-upper-part-OfCard"
                )[indexOfCard];
              const dragAndDropSecondOverlayOnUpperPartOfCard: any =
                document.getElementsByClassName(
                  "drag-and-drop-second-overlay-on-upper-part-OfCard"
                )[indexOfCard];

              fileOfCard.style.display = "grid";
              dragAndDropOverlayOnUpperPartOfCard.style.display = "none";
              dragAndDropSecondOverlayOnUpperPartOfCard.style.display = "none";

              event.preventDefault();

              const files: any = event.dataTransfer.files;

              const dataURLOfUploadedFiles: any = [...uploadedFiles];

              Object.values(files)
                .map((element: any) => {
                  if (element.type.includes("image/" || "video/")) {
                    const reader: any = new FileReader();

                    reader.onload = () => {
                      dataURLOfUploadedFiles.push(reader.result);

                      setFilesUploaded(true);

                      setUploadedFiles(dataURLOfUploadedFiles);
                    };

                    reader.readAsDataURL(element);
                  } else {
                    return null;
                  }
                })
                .filter((element: any) => {
                  return element != null;
                });
            }}
          ></div>
        </div>
        <div className="pop-up-overlay"></div>
      </fileUploadContext.Provider>
    </>
  );
}
