// Library imports
import { useEffect, useState, useRef, createContext } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import ReactQuill from "react-quill";

// CSS imports
import style from "@/components/Card/Card.module.scss";
import "react-quill/dist/quill.snow.css";

// Redux imports
import { saveCard } from "@/redux/slices/cardSlice";

// Component imports
import ReminderButton from "./componentsOfCard/ReminderButton";
import ThreeDotMenu from "./componentsOfCard/ThreeDotMenu";
import ThemeButton from "./componentsOfCard/ThemeButton";
import AttachmentButton from "./componentsOfCard/AttachmentButton";
import EditorButton from "./componentsOfCard/EditorButton";
import EditorButtonContent from "./componentsOfCard/EditorButtonContent";
import ImagePopUp from "../ImagePopUp/ImagePopUp";

// Component exports
export const fileUploadContext: any = createContext(null);

// Assets
import archiveImage from "../../../public/assets/Images/Icons/archive.svg";
import editImage from "../../../public/assets/Images/Icons/edit.svg";
import saveImage from "../../../public/assets/Images/Icons/save.svg";

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

  const addNewCard: any = useSelector((state: any) => {
    return state.CardSlice.cardData;
  });
  const cardDispatch = useDispatch();

  useEffect(() => {
    // Changing file display type
    const filesOfCard: any =
      document.getElementsByClassName("filesOfCard")[indexOfCard];
    if (elementOfCard.files.length !== 0) {
      filesOfCard.style.display = "grid";
    } else {
      filesOfCard.style.display = "none";
    }
  }, []);

  useEffect(() => {
    // Saving uploaded files to local storage.
    if (filesUploaded === true) {
      setFilesUploaded(false);

      // Dispatching slice
      cardDispatch(
        saveCard({
          _id: elementOfCard._id,
          headerValue: elementOfCard.headerValue,
          bodyValue: elementOfCard.bodyValue,
          files: uploadedFiles,
          color: elementOfCard.color,
          index: addNewCard.length - 1 - indexOfCard,
        })
      );
    }
  }, [uploadedFiles]);

  useEffect(() => {
    // Functionality of Edit and Save button in Card.
    // Selecting elements
    const containerOfCard: any =
      document.getElementsByClassName("containerOfCard")[indexOfCard];
    const upperPartOfCard: any =
      document.getElementsByClassName("upperPartOfCard")[indexOfCard];
    const headerTextPartOfCard: any = document.getElementsByClassName(
      "headerTextPartOfCard"
    )[indexOfCard];
    const headingOfCard: any =
      document.getElementsByClassName("headingOfCard")[indexOfCard];
    const bodyOfCard: any =
      document.getElementsByClassName("bodyOfCard")[indexOfCard];
    const qlEditor: any =
      document.getElementsByClassName("ql-editor")[indexOfCard];
    const shadowPartOfCard: any =
      document.getElementsByClassName("shadowPartOfCard")[indexOfCard];
    const LowerPartOfCard: any =
      document.getElementsByClassName("lowerPartOfCard")[indexOfCard];
    const editAndSaveButtonOfCard: any = document.getElementsByClassName(
      "editAndSaveButtonOfCard"
    )[indexOfCard];
    const overlayOnSaveModeInUpperPartOfCard: any =
      document.getElementsByClassName("overlayOnSaveModeInUpperPartOfCard")[
        indexOfCard
      ];
    const editElementTextInLowerPartOfCard: any =
      document.getElementsByClassName("editElementTextInLowerPartOfCard")[
        indexOfCard
      ];
    const editorButtonElementInLowerPartOfCard: any =
      document.getElementsByClassName("editorButtonElementInLowerPartOfCard")[
        indexOfCard
      ];
    const popUpOverlay: any =
      document.getElementsByClassName("popUpOverlay")[indexOfCard];

    if (editAndSaveButton === false) {
      // Applying style on selected elements
      overlayOnSaveModeInUpperPartOfCard.style.display = "block";
      shadowPartOfCard.style.cssText = `display: block; background: linear-gradient(to bottom, transparent, ${elementOfCard.color} 90%);`;

      if (headingOfCard.value === "") {
        headingOfCard.style.display = "none";
      }

      if (bodyOfCard.value === "" || qlEditor.innerHTML === `<p><br></p>`) {
        bodyOfCard.style.display = "none";
      }

      upperPartOfCard.style.height = "100%";
      editorButtonElementInLowerPartOfCard.style.display = "none";
      popUpOverlay.style.display = "none";

      editAndSaveButtonOfCard.src = editImage.src;
      editElementTextInLowerPartOfCard.innerHTML = "Edit";
      setEditorButton(false);

      headerTextPartOfCard.scrollIntoView();

      // Dispatching slice
      cardDispatch(
        saveCard({
          _id: elementOfCard._id,
          headerValue: headerValueOnChange,
          bodyValue: bodyValueOnChange,
          files: uploadedFiles,
          color: elementOfCard.color,
          index: addNewCard.length - 1 - indexOfCard,
        })
      );
    }

    if (editAndSaveButton === true) {
      // Applying style on selected elements
      headingOfCard.style.display = "block";
      bodyOfCard.style.display = "block";
      overlayOnSaveModeInUpperPartOfCard.style.display = "none";
      shadowPartOfCard.style.display = "none";
      popUpOverlay.style.display = "block";
      editAndSaveButtonOfCard.src = saveImage.src;
      editElementTextInLowerPartOfCard.innerHTML = "Save";
      editorButtonElementInLowerPartOfCard.style.display = "block";

      upperPartOfCard.style.cssText = `height: ${
        containerOfCard.clientHeight - LowerPartOfCard.clientHeight - 15
      }px`;

      bodyOfCard.style.height = `${qlEditor.scrollHeight}px`;
    }
  }, [editAndSaveButton]);

  // Getting value onChange of the inputs of Card component.
  const functionCalledByHeaderOnChange = (event: any) => {
    setHeaderValueOnChange(event.target.value);

    if (headerToggolOnChange === true) {
      setHeaderToggolOnChange(!headerToggolOnChange);
    }
  };

  const functionCalledByBodyOnChange = (event: any) => {
    setBodyValueOnChange(event);

    if (bodyToggolOnChange === true) {
      setBodyToggolOnChange(!bodyToggolOnChange);
    }

    // Selecting elements
    const bodyOfCard: any =
      document.getElementsByClassName("bodyOfCard")[indexOfCard];
    const qlEditor: any =
      document.getElementsByClassName("ql-editor")[indexOfCard];

    // Dynamically increasing height of bodyOfCard
    bodyOfCard.style.height = `${qlEditor.scrollHeight}px`;
  };

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <fileUploadContext.Provider value={[uploadedFiles, setUploadedFiles]}>
        <div
          className={
            editAndSaveButton === false
              ? `${style.containerOfCard} containerOfCard`
              : `${style.containerOfCard} ${style.popUpInEditModeContainerOfCard} containerOfCard`
          }
          onMouseEnter={() => {
            const overlayOnLowerPartOfCard: any =
              document.getElementsByClassName("overlayOnLowerPartOfCard")[
                indexOfCard
              ];

            setTimeout(() => {
              overlayOnLowerPartOfCard.style.display = "none";
            }, 600);
          }}
          onMouseLeave={() => {
            const overlayOnLowerPartOfCard: any =
              document.getElementsByClassName("overlayOnLowerPartOfCard")[
                indexOfCard
              ];

            overlayOnLowerPartOfCard.style.display = "block";
          }}
          onDragOver={(event) => {
            event.preventDefault();

            const dragAndDropOverlayOnUpperPartOfCard: any =
              document.getElementsByClassName(
                "dragAndDropOverlayOnUpperPartOfCard"
              )[indexOfCard];
            const dragAndDropSecondOverlayOnUpperPartOfCard: any =
              document.getElementsByClassName(
                "dragAndDropSecondOverlayOnUpperPartOfCard"
              )[indexOfCard];

            dragAndDropOverlayOnUpperPartOfCard.style.display = "block";
            dragAndDropSecondOverlayOnUpperPartOfCard.style.display = "block";
          }}
        >
          <div
            className={
              editAndSaveButton === false
                ? `${style.upperPartOfCard} upperPartOfCard`
                : `${style.upperPartOfCard} ${style.popUpInEditModeUpperPartOfCard} upperPartOfCard`
            }
          >
            <div
              className={`${style.headerTextPartOfCard} headerTextPartOfCard`}
            >
              <input
                type="text"
                className={`${style.headingOfCard} headingOfCard`}
                placeholder="Title"
                value={
                  headerToggolOnChange === true
                    ? elementOfCard.headerValue
                    : headerValueOnChange || ""
                }
                onChange={(event: any) => functionCalledByHeaderOnChange(event)}
                onWheel={(e: any) => {
                  const headingOfCard: any =
                    document.getElementsByClassName("headingOfCard")[
                      indexOfCard
                    ];

                  // Get scroll direction
                  const scrollDirection = Math.sign(e.deltaY);

                  // Adjust the scroll amount as needed
                  const scrollAmount: number = 100;

                  // Scroll the container horizontally
                  headingOfCard.scrollLeft += scrollAmount * scrollDirection;
                }}
              />
            </div>

            <div className={`${style.filesOfCard} filesOfCard`}>
              {elementOfCard.files.map((element: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={`${style.fileContainer} fileContainer`}
                    onClick={() => {
                      // Setting values
                      setImageIndex(index);

                      // Selecting elements
                      const containerOfCard: any =
                        document.getElementsByClassName("containerOfCard")[
                          indexOfCard
                        ];
                      const imagePopUpMainContainer: any =
                        document.getElementsByClassName(
                          "imagePopUpMainContainer"
                        )[indexOfCard];
                      const backImageOfImagePopUpHeader: any =
                        document.getElementsByClassName(
                          "backImageOfImagePopUpHeader"
                        )[indexOfCard];
                      const deleteImageOfImagePopUpHeader: any =
                        document.getElementsByClassName(
                          "deleteImageOfImagePopUpHeader"
                        )[indexOfCard];
                      const previousImageOfImagePopUpHeader: any =
                        document.getElementsByClassName(
                          "previousImageOfImagePopUpHeader"
                        )[indexOfCard];
                      const nextImageOfImagePopUpHeader: any =
                        document.getElementsByClassName(
                          "nextImageOfImagePopUpHeader"
                        )[indexOfCard];

                      // Applying style on selected elements
                      if (editAndSaveButton === true) {
                        containerOfCard.style.display = "none";
                        imagePopUpMainContainer.style.display = "block";

                        const timeOut: any = setTimeout(() => {
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
                    <embed
                      className={`${style.fileOfCard} fileOfCard`}
                      src={element}
                    />
                  </div>
                );
              })}
            </div>

            <ReactQuill
              className={`${style.bodyOfCard} bodyOfCard`}
              ref={quillRef}
              placeholder="Take a note...."
              value={
                bodyToggolOnChange === true
                  ? elementOfCard.bodyValue
                  : bodyValueOnChange || ""
              }
              onChange={(event: any) => functionCalledByBodyOnChange(event)}
              modules={{
                clipboard: true,
                toolbar: false,
              }}
            ></ReactQuill>
            <div
              className={`${style.overlayOnSaveModeInUpperPartOfCard} overlayOnSaveModeInUpperPartOfCard`}
            ></div>
          </div>
          <div className={`${style.shadowPartOfCard} shadowPartOfCard`}></div>
          <div
            className={
              editAndSaveButton === false
                ? `${style.lowerPartOfCard} lowerPartOfCard`
                : `${style.lowerPartOfCard} ${style.popUpInEditModeLowerPartOfCard} lowerPartOfCard`
            }
          >
            <div
              className={
                editAndSaveButton === false
                  ? `${style.lowerPartContainerOfCard} lowerPartContainerOfCard`
                  : `${style.lowerPartContainerOfCard} ${style.popUpInEditModeLowerPartContainerOfCard} lowerPartContainerOfCard`
              }
            >
              <button
                className={
                  editAndSaveButton === false
                    ? `${style.elementInLowerPartOfCard} elementInLowerPartOfCard`
                    : `${style.elementInLowerPartOfCard} ${style.popUpInEditModeElementInLowerPartOfCard} elementInLowerPartOfCard`
                }
                onClick={() => {
                  const reminderContentWraperInLowerPartOfCard: any =
                    document.getElementsByClassName(
                      "reminderContentWraperInLowerPartOfCard"
                    )[indexOfCard];
                  reminderContentWraperInLowerPartOfCard.style.display =
                    "block";

                  const reminderButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "reminderButtonParagraphOfCard"
                    )[indexOfCard];
                  reminderButtonParagraphOfCard.style.display = "none";

                  // Setting div element
                  setDivElement(reminderContentWraperInLowerPartOfCard);
                }}
                onMouseEnter={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("containerOfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: visible";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

                  const reminderButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "reminderButtonParagraphOfCard"
                    )[indexOfCard];
                  reminderButtonParagraphOfCard.style.display = "block";
                }}
                onMouseLeave={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("containerOfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: hidden";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

                  const reminderContentWraperInLowerPartOfCard: any =
                    document.getElementsByClassName(
                      "reminderContentWraperInLowerPartOfCard"
                    )[indexOfCard];
                  reminderContentWraperInLowerPartOfCard.style.display = "none";

                  const reminderButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "reminderButtonParagraphOfCard"
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
                className={
                  editAndSaveButton === false
                    ? `${style.elementInLowerPartOfCard} elementInLowerPartOfCard`
                    : `${style.elementInLowerPartOfCard} ${style.popUpInEditModeElementInLowerPartOfCard} elementInLowerPartOfCard`
                }
                onClick={() => {
                  const themeItemsWraperInLowerPartOfCard: any =
                    document.getElementsByClassName(
                      "themeItemsWraperInLowerPartOfCard"
                    )[indexOfCard];
                  themeItemsWraperInLowerPartOfCard.style.display = "block";

                  const themeButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "themeButtonParagraphOfCard"
                    )[indexOfCard];
                  themeButtonParagraphOfCard.style.display = "none";

                  // Setting div element
                  setDivElement(themeItemsWraperInLowerPartOfCard);
                }}
                onMouseEnter={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("containerOfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: visible";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

                  const themeButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "themeButtonParagraphOfCard"
                    )[indexOfCard];
                  themeButtonParagraphOfCard.style.display = "block";
                }}
                onMouseLeave={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("containerOfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: hidden";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

                  const themeItemsWraperInLowerPartOfCard: any =
                    document.getElementsByClassName(
                      "themeItemsWraperInLowerPartOfCard"
                    )[indexOfCard];
                  themeItemsWraperInLowerPartOfCard.style.display = "none";

                  const themeButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "themeButtonParagraphOfCard"
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
                className={
                  editAndSaveButton === false
                    ? `${style.elementInLowerPartOfCard} elementInLowerPartOfCard`
                    : `${style.elementInLowerPartOfCard} ${style.popUpInEditModeElementInLowerPartOfCard} elementInLowerPartOfCard`
                }
                onMouseEnter={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("containerOfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: visible";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
                }}
                onMouseLeave={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("containerOfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: hidden";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
                }}
              >
                <Image src={archiveImage} alt="archive-image" />
                <p
                  className={`${style.elementTextInLowerPartOfCard} elementTextInLowerPartOfCard`}
                >
                  Archive
                </p>
                <span
                  className={`${style.overlayOnElementInLowerPartOfCard} overlayOnElementInLowerPartOfCard`}
                ></span>
              </button>
              <button
                className={
                  editAndSaveButton === false
                    ? `${style.elementInLowerPartOfCard} elementInLowerPartOfCard`
                    : `${style.elementInLowerPartOfCard} ${style.popUpInEditModeElementInLowerPartOfCard} elementInLowerPartOfCard`
                }
                onClick={() => {
                  const attachmentItemsWraperInLowerPartOfCard: any =
                    document.getElementsByClassName(
                      "attachmentItemsWraperInLowerPartOfCard"
                    )[indexOfCard];
                  attachmentItemsWraperInLowerPartOfCard.style.display =
                    "block";

                  // Setting div element
                  setDivElement(attachmentItemsWraperInLowerPartOfCard);
                }}
                onMouseEnter={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("containerOfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: visible";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
                }}
                onMouseLeave={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("containerOfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: hidden";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

                  const attachmentItemsWraperInLowerPartOfCard: any =
                    document.getElementsByClassName(
                      "attachmentItemsWraperInLowerPartOfCard"
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
                className={
                  editAndSaveButton === false
                    ? `${style.elementInLowerPartOfCard} elementInLowerPartOfCard`
                    : `${style.elementInLowerPartOfCard} ${style.popUpInEditModeElementInLowerPartOfCard} elementInLowerPartOfCard`
                }
                onClick={() => {
                  setEditAndSaveButton(!editAndSaveButton);
                }}
                onMouseEnter={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("containerOfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: visible";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
                }}
                onMouseLeave={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("containerOfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: hidden";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
                }}
              >
                <Image
                  className={`${style.editAndSaveButtonOfCard} editAndSaveButtonOfCard`}
                  src={editImage}
                  alt="edit-image"
                />
                <p
                  className={`${style.elementTextInLowerPartOfCard} elementTextInLowerPartOfCard editElementTextInLowerPartOfCard`}
                >
                  Edit
                </p>
                <span
                  className={`${style.overlayOnElementInLowerPartOfCard} overlayOnElementInLowerPartOfCard`}
                ></span>
              </button>
              <button
                className={
                  editAndSaveButton === false
                    ? `${style.elementInLowerPartOfCard} elementInLowerPartOfCard`
                    : `${style.elementInLowerPartOfCard} ${style.popUpInEditModeElementInLowerPartOfCard} elementInLowerPartOfCard`
                }
                onClick={() => {
                  const threeDotItemsWraperInLowerPartOfCard: any =
                    document.getElementsByClassName(
                      "threeDotItemsWraperInLowerPartOfCard"
                    )[indexOfCard];
                  threeDotItemsWraperInLowerPartOfCard.style.display = "block";

                  const morebuttonOfCard: any = document.getElementsByClassName(
                    "moreButtonParagraphOfCard"
                  )[indexOfCard];
                  morebuttonOfCard.style.display = "none";

                  // Setting div element
                  setDivElement(threeDotItemsWraperInLowerPartOfCard);
                }}
                onMouseEnter={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("containerOfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: visible";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

                  const morebuttonOfCard: any = document.getElementsByClassName(
                    "moreButtonParagraphOfCard"
                  )[indexOfCard];
                  morebuttonOfCard.style.display = "block";
                }}
                onMouseLeave={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("containerOfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: hidden";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

                  const threeDotItemsWraperInLowerPartOfCard: any =
                    document.getElementsByClassName(
                      "threeDotItemsWraperInLowerPartOfCard"
                    )[indexOfCard];
                  threeDotItemsWraperInLowerPartOfCard.style.display = "none";

                  const morebuttonOfCard: any = document.getElementsByClassName(
                    "moreButtonParagraphOfCard"
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
                className={`${style.elementInLowerPartOfCard} elementInLowerPartOfCard editorButtonElementInLowerPartOfCard`}
                onClick={() => {
                  setEditorButton(!editorButton);

                  const editorButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "editorButtonParagraphOfCard"
                    )[indexOfCard];
                  editorButtonParagraphOfCard.style.display = "none";
                }}
                onMouseEnter={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("containerOfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: visible";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

                  const editorButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "editorButtonParagraphOfCard"
                    )[indexOfCard];
                  editorButtonParagraphOfCard.style.display = "block";
                }}
                onMouseLeave={() => {
                  const containerOfCard: any =
                    document.getElementsByClassName("containerOfCard")[
                      indexOfCard
                    ];
                  containerOfCard.style.cssText = "overflow: hidden";
                  containerOfCard.style.backgroundColor = `${elementOfCard.color}`;

                  const editorButtonParagraphOfCard: any =
                    document.getElementsByClassName(
                      "editorButtonParagraphOfCard"
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

              <span
                className={`${style.overlayOnLowerPartOfCard} overlayOnLowerPartOfCard`}
              ></span>
            </div>
          </div>
          <div
            className={`${style.dragAndDropOverlayOnUpperPartOfCard} dragAndDropOverlayOnUpperPartOfCard`}
          >
            <span className={`${style.dragAndDropBox} dragAndDropBox`}>
              <h3
                className={`${style.dragAndDropOverlayText} dragAndDropOverlayText`}
              >
                Drop Files Here
              </h3>
            </span>
          </div>
          <div
            className={`${style.dragAndDropSecondOverlayOnUpperPartOfCard} dragAndDropSecondOverlayOnUpperPartOfCard`}
            onDragLeave={() => {
              const dragAndDropOverlayOnUpperPartOfCard: any =
                document.getElementsByClassName(
                  "dragAndDropOverlayOnUpperPartOfCard"
                )[indexOfCard];
              const dragAndDropSecondOverlayOnUpperPartOfCard: any =
                document.getElementsByClassName(
                  "dragAndDropSecondOverlayOnUpperPartOfCard"
                )[indexOfCard];

              dragAndDropOverlayOnUpperPartOfCard.style.display = "none";
              dragAndDropSecondOverlayOnUpperPartOfCard.style.display = "none";
            }}
            onDrop={(event) => {
              // Selecting elements
              const filesOfCard: any =
                document.getElementsByClassName("filesOfCard")[indexOfCard];
              const dragAndDropOverlayOnUpperPartOfCard: any =
                document.getElementsByClassName(
                  "dragAndDropOverlayOnUpperPartOfCard"
                )[indexOfCard];
              const dragAndDropSecondOverlayOnUpperPartOfCard: any =
                document.getElementsByClassName(
                  "dragAndDropSecondOverlayOnUpperPartOfCard"
                )[indexOfCard];

              // Applying style to selected elements
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
                  return element !== null;
                });
            }}
          ></div>
        </div>
        <div className={`${style.popUpOverlay} popUpOverlay`}></div>
        <ImagePopUp
          elementOfCard={elementOfCard}
          indexOfCard={indexOfCard}
          setUploadedFiles={setUploadedFiles}
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
