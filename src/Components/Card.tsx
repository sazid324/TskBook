// Library imports
import { useEffect, useState, useRef, useContext, createContext } from "react";
import ReactQuill from "react-quill";

// Component imports
import ReminderButton from "./ReminderButton";
import ThreeDotMenu from "./ThreeDotMenu";
import ThemeButton from "./ThemeButton";
import AttachmentButton from "./AttachmentButton";
import EditorButton from "./EditorButton";
import EditorButtonContent from "./EditorButtonContent";
import ImagePopUp from "./ImagePopUp";
import { addNewNoteContext } from "../Pages/Notes";

// CSS imports
import "react-quill/dist/quill.snow.css";

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
  setDivElement: any;
}

export default function Card({
  elementOfCard,
  indexOfCard,
  setDivElement,
}: CardElements) {
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
  const [editorButton, setEditorButton] = useState(false);
  const [timeOutReference, setTimeOutReference] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const quillRef = useRef<any>(null);

  useEffect(() => {
    const filesOfCard: any =
      document.getElementsByClassName("files-OfCard")[indexOfCard];
    if (elementOfCard.files != "") {
      filesOfCard.style.display = "grid";
    } else {
      filesOfCard.style.display = "none";
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

  useEffect(() => {
    // Functionality of Edit and Save button in Card.
    // Selecting elements
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
    const qlEditor: any =
      document.getElementsByClassName("ql-editor")[indexOfCard];
    const editAndSaveButtonOfCard: any = document.getElementsByClassName(
      "edit-and-save-button-OfCard"
    )[indexOfCard];
    const overlayOnSaveModeInUpperPartOfCard: any =
      document.getElementsByClassName(
        "overlay-on-save-mode-in-upper-part-OfCard"
      )[indexOfCard];
    const editElementTextInLowerPartOfCard: any =
      document.getElementsByClassName("edit-element-text-in-lower-part-OfCard")[
        indexOfCard
      ];
    const editorButtonElementInLowerPartOfCard: any =
      document.getElementsByClassName(
        "editor-button-element-in-lower-part-OfCard"
      )[indexOfCard];
    const popUpOverlay: any =
      document.getElementsByClassName("pop-up-overlay")[indexOfCard];

    if (editAndSaveButton == false) {
      // Applying style on selected elements
      overlayOnSaveModeInUpperPartOfCard.style.display = "block";
      shadowPartOfCard.style.cssText = `display: block; background: linear-gradient(to bottom, transparent, ${elementOfCard.color} 90%);`;

      if (headingOfCard.value == "") {
        headingOfCard.style.display = "none";
      }

      if (
        elementOfCard.bodyValue == "" ||
        qlEditor.innerHTML == `<p><br></p>`
      ) {
        bodyOfCard.style.display = "none";
      }

      upperPartOfCard.style.height = "100%";
      editorButtonElementInLowerPartOfCard.style.display = "none";
      popUpOverlay.style.display = "none";

      editAndSaveButtonOfCard.src = `${editImage}`;
      editElementTextInLowerPartOfCard.innerHTML = "Edit";
      setEditorButton(false);

      headingOfCard.scrollIntoView();

      // Saving elements in local storage
      localStorage.setItem(
        "card-notes-in-local-storage",
        JSON.stringify(addNew)
      );
    }

    if (editAndSaveButton == true) {
      // Applying style on selected elements
      headingOfCard.style.display = "block";
      bodyOfCard.style.display = "block";
      overlayOnSaveModeInUpperPartOfCard.style.display = "none";
      shadowPartOfCard.style.display = "none";
      popUpOverlay.style.display = "block";
      editAndSaveButtonOfCard.src = `${saveImage}`;
      editElementTextInLowerPartOfCard.innerHTML = "Save";
      editorButtonElementInLowerPartOfCard.style.display = "block";

      upperPartOfCard.style.cssText = `height: ${
        containerOfCard.clientHeight - LowerPartOfCard.clientHeight - 15
      }px`;
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
    setBodyValueOnChange(event);

    if (bodyToggolOnChange == true) {
      setBodyToggolOnChange(!bodyToggolOnChange);
    }
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

            <div className="files-OfCard">
              {elementOfCard.files.map((element: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="file-container"
                    onClick={() => {
                      // Setting values
                      setImageIndex(index);

                      // Selecting elements
                      const containerOfCard: any =
                        document.getElementsByClassName("container-OfCard")[
                          indexOfCard
                        ];
                      const imagePopUpMainContainer: any =
                        document.getElementsByClassName(
                          "image-pop-up-main-container"
                        )[indexOfCard];
                      const backImageOfImagePopUpHeader: any =
                        document.getElementsByClassName(
                          "back-image-of-image-pop-up-header"
                        )[indexOfCard];
                      const deleteImageOfImagePopUpHeader: any =
                        document.getElementsByClassName(
                          "delete-image-of-image-pop-up-header"
                        )[indexOfCard];
                      const previousImageOfImagePopUpHeader: any =
                        document.getElementsByClassName(
                          "previous-image-of-image-pop-up-header"
                        )[indexOfCard];
                      const nextImageOfImagePopUpHeader: any =
                        document.getElementsByClassName(
                          "next-image-of-image-pop-up-header"
                        )[indexOfCard];

                      // Applying style on selected elements
                      if (editAndSaveButton == true) {
                        containerOfCard.style.display = "none";
                        imagePopUpMainContainer.style.display = "block";

                        const timeOut: number = setTimeout(() => {
                          backImageOfImagePopUpHeader.style.cssText =
                            "opacity: 0; transition: opacity 0.5s;";
                          deleteImageOfImagePopUpHeader.style.cssText =
                            "opacity: 0; transition: opacity 0.5s;";
                          previousImageOfImagePopUpHeader.style.cssText =
                            "opacity: 0; transition: opacity 0.5s;";
                          nextImageOfImagePopUpHeader.style.cssText =
                            "opacity: 0; transition: opacity 0.5s;";

                          setTimeout(() => {
                            backImageOfImagePopUpHeader.style.display = "none";
                            deleteImageOfImagePopUpHeader.style.display =
                              "none";
                            previousImageOfImagePopUpHeader.style.display =
                              "none";
                            nextImageOfImagePopUpHeader.style.display = "none";
                          }, 500);
                        }, 10000);

                        setTimeOutReference(timeOut);
                      }
                    }}
                  >
                    <embed className="file-OfCard" src={element} />
                  </div>
                );
              })}
            </div>

            <ReactQuill
              className="body-OfCard"
              ref={quillRef}
              placeholder="Take a note...."
              value={
                bodyToggolOnChange == true
                  ? elementOfCard.bodyValue
                  : bodyValueOnChange || ""
              }
              onChange={(event: any) => functionCalledByBodyOnChange(event)}
              modules={{
                clipboard: true,
                toolbar: false,
              }}
            ></ReactQuill>
            <div className="overlay-on-save-mode-in-upper-part-OfCard"></div>
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

                  // Setting div element
                  setDivElement(reminderContentWraperInLowerPartOfCard);
                }}
                onMouseEnter={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: visible";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

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
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

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

                  // Setting div element
                  setDivElement(null);
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

                  // Setting div element
                  setDivElement(themeItemsWraperInLowerPartOfCard);
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

                  // Setting div element
                  setDivElement(null);
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

                  // Setting div element
                  setDivElement(attachmentItemsWraperInLowerPartOfCard);
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

                  // Setting div element
                  setDivElement(null);
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

                  // Setting div element
                  setDivElement(threeDotItemsWraperInLowerPartOfCard);
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

                  // Setting div element
                  setDivElement(null);
                }}
              >
                <ThreeDotMenu
                  elementOfCard={elementOfCard}
                  indexOfCard={indexOfCard}
                />
              </button>
              <button
                className="element-in-lower-part-OfCard editor-button-element-in-lower-part-OfCard"
                onClick={() => {
                  setEditorButton(!editorButton);

                  const editorButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "editor-button-paragraph-OfCard"
                    )[indexOfCard];
                  editorButtonParagraphOfCard.style.display = "none";
                }}
                onMouseEnter={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: visible";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

                  const editorButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "editor-button-paragraph-OfCard"
                    )[indexOfCard];
                  editorButtonParagraphOfCard.style.display = "block";
                }}
                onMouseLeave={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: hidden";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

                  const editorButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "editor-button-paragraph-OfCard"
                    )[indexOfCard];
                  editorButtonParagraphOfCard.style.display = "none";
                }}
              >
                <EditorButton
                  indexOfCard={indexOfCard}
                  editorButton={editorButton}
                />
              </button>

              <EditorButtonContent
                indexOfCard={indexOfCard}
                quillRef={quillRef}
              />

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
              const filesOfCard: any =
                document.getElementsByClassName("files-OfCard")[indexOfCard];
              const dragAndDropOverlayOnUpperPartOfCard: any =
                document.getElementsByClassName(
                  "drag-and-drop-overlay-on-upper-part-OfCard"
                )[indexOfCard];
              const dragAndDropSecondOverlayOnUpperPartOfCard: any =
                document.getElementsByClassName(
                  "drag-and-drop-second-overlay-on-upper-part-OfCard"
                )[indexOfCard];

              filesOfCard.style.display = "grid";
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
        <ImagePopUp
          elementOfCard={elementOfCard}
          indexOfCard={indexOfCard}
          editAndSaveButton={editAndSaveButton}
          timeOutReference={timeOutReference}
          setTimeOutReference={setTimeOutReference}
          imageElement={elementOfCard.files}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
      </fileUploadContext.Provider>
    </>
  );
}
