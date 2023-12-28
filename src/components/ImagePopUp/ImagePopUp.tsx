// Library imports
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

// CSS imports
import style from "@/components/ImagePopUp/ImagePopUp.module.scss";

// Redux imports
import { saveCard } from "@/redux/slices/cardSlice";

// Assets
import backImage from "@/assets/Images/Icons/back.svg";
import deleteImage from "@/assets/Images/Icons/delete.svg";
import nextArrowImage from "@/assets/Images/Icons/nextArrow.svg";
import previousArrowImage from "@/assets/Images/Icons/previousArrow.svg";

// Interfaces
interface ImagePopUpElements {
  elementOfCard: any;
  indexOfCard: number;
  setUploadedFiles: any;
  editAndSaveButton: boolean;
  timeOutReference: number;
  setTimeOutReference: any;
  imageElement: any;
  imageIndex: number;
  setImageIndex: any;
}

export default function ImagePopUp({
  elementOfCard,
  indexOfCard,
  setUploadedFiles,
  editAndSaveButton,
  timeOutReference,
  setTimeOutReference,
  imageElement,
  imageIndex,
  setImageIndex,
}: ImagePopUpElements) {
  // Hooks
  const addNewCard: any = useSelector((state: any) => {
    return state.CardSlice.cardData;
  });
  const cardDispatch = useDispatch();

  // Functions
  const functionCalledByButtonsOfImagePopUpHeaderOnMouseEnter = () => {
    // Clearing privious time event
    clearTimeout(timeOutReference);

    const backImageOfImagePopUpHeader: any = document.getElementsByClassName(
      "backImageOfImagePopUpHeader"
    )[indexOfCard];
    const deleteImageOfImagePopUpHeader: any = document.getElementsByClassName(
      "deleteImageOfImagePopUpHeader"
    )[indexOfCard];
    const previousImageOfImagePopUpHeader: any =
      document.getElementsByClassName("previousImageOfImagePopUpHeader")[
        indexOfCard
      ];
    const nextImageOfImagePopUpHeader: any = document.getElementsByClassName(
      "nextImageOfImagePopUpHeader"
    )[indexOfCard];

    // Applying style on selected elements
    if (
      editAndSaveButton === true &&
      backImageOfImagePopUpHeader.style.display === "none" &&
      deleteImageOfImagePopUpHeader.style.display === "none" &&
      previousImageOfImagePopUpHeader.style.display === "none" &&
      nextImageOfImagePopUpHeader.style.display === "none"
    ) {
      backImageOfImagePopUpHeader.style.cssText = "display: block; opacity: 0;";
      deleteImageOfImagePopUpHeader.style.cssText =
        "display: block; opacity: 0;";
      previousImageOfImagePopUpHeader.style.cssText =
        "display: block; opacity: 0;";
      nextImageOfImagePopUpHeader.style.cssText = "display: block; opacity: 0;";

      setTimeout(() => {
        backImageOfImagePopUpHeader.style.cssText =
          "opacity: 1; transition: opacity 0.5s;";
        deleteImageOfImagePopUpHeader.style.cssText =
          "opacity: 1; transition: opacity 0.5s;";
        previousImageOfImagePopUpHeader.style.cssText =
          "opacity: 1; transition: opacity 0.5s;";
        nextImageOfImagePopUpHeader.style.cssText =
          "opacity: 1; transition: opacity 0.5s;";
      }, 1);
    }
  };

  const functionCalledByButtonsOfImagePopUpHeaderOnMouseLeave = () => {
    const backImageOfImagePopUpHeader: any = document.getElementsByClassName(
      "backImageOfImagePopUpHeader"
    )[indexOfCard];
    const deleteImageOfImagePopUpHeader: any = document.getElementsByClassName(
      "deleteImageOfImagePopUpHeader"
    )[indexOfCard];
    const previousImageOfImagePopUpHeader: any =
      document.getElementsByClassName("previousImageOfImagePopUpHeader")[
        indexOfCard
      ];
    const nextImageOfImagePopUpHeader: any = document.getElementsByClassName(
      "nextImageOfImagePopUpHeader"
    )[indexOfCard];

    // Applying style on selected elements
    if (editAndSaveButton === true) {
      const timeOutAfterLeavingTheButton: any = setTimeout(() => {
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
          deleteImageOfImagePopUpHeader.style.display = "none";
          previousImageOfImagePopUpHeader.style.display = "none";
          nextImageOfImagePopUpHeader.style.display = "none";
        }, 500);
      }, 10000);

      setTimeOutReference(timeOutAfterLeavingTheButton);
    }
  };

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div
        className={`${style.imagePopUpMainContainer} imagePopUpMainContainer`}
      >
        <div className={`${style.imagePopUpContainer} imagePopUpContainer`}>
          <div className={`${style.imagePopUpHeader} imagePopUpHeader`}>
            <div
              className={`${style.leftPartOfImagePopUpHeader} leftPartOfImagePopUpHeader`}
            >
              <span
                className={`${style.backImageContainerOfImagePopUpHeader} backImageContainerOfImagePopUpHeader`}
                onClick={() => {
                  // Selecting elements
                  const containerOfCard: any =
                    document.getElementsByClassName("containerOfCard")[
                      indexOfCard
                    ];
                  const imagePopUpMainContainer: any =
                    document.getElementsByClassName("imagePopUpMainContainer")[
                      indexOfCard
                    ];

                  // Applying style on selected elements
                  if (editAndSaveButton === true) {
                    containerOfCard.style.display = "block";
                    imagePopUpMainContainer.style.display = "none";
                  }
                }}
                onMouseEnter={() => {
                  functionCalledByButtonsOfImagePopUpHeaderOnMouseEnter();
                }}
                onMouseLeave={() => {
                  functionCalledByButtonsOfImagePopUpHeaderOnMouseLeave();
                }}
              >
                <Image
                  className={`${style.backImageOfImagePopUpHeader} backImageOfImagePopUpHeader`}
                  src={backImage}
                  alt="back-image"
                />
              </span>
            </div>
            <div
              className={`${style.rightPartOfImagePopUpHeader} rightPartOfImagePopUpHeader`}
            >
              <span
                className={`${style.deleteImageContainerOfImagePopUpHeader} deleteImageContainerOfImagePopUpHeader`}
                onClick={() => {
                  // Selecting elements
                  const filesOfCard: any =
                    document.getElementsByClassName("filesOfCard")[indexOfCard];
                  const fileElementInImagePopUpBody: any =
                    document.getElementsByClassName(
                      "fileElementInImagePopUpBody"
                    )[indexOfCard];

                  // Changing data of file-element-in-image-pop-up-body
                  if (imageIndex === imageElement.length - 1) {
                    fileElementInImagePopUpBody.src = `${
                      imageElement[imageElement.length - 2]
                    }`;
                  }

                  // Deleting image
                  const deleteCurrentImage: any = [...imageElement];
                  deleteCurrentImage.splice(imageIndex, 1);

                  // Setting uploaded files
                  setUploadedFiles(deleteCurrentImage);

                  // Dispatching slice
                  cardDispatch(
                    saveCard({
                      _id: elementOfCard._id,
                      headerValue: elementOfCard.headerValue,
                      bodyValue: elementOfCard.bodyValue,
                      files: deleteCurrentImage,
                      color: elementOfCard.color,
                      index: addNewCard.length - 1 - indexOfCard,
                    })
                  );

                  // Setting new image index
                  if (imageIndex === imageElement.length - 1) {
                    setImageIndex(imageElement.length - 2);
                  }

                  // Setting visibility of filesOfCard
                  if (deleteCurrentImage.length !== 0) {
                    filesOfCard.style.display = "grid";
                  } else {
                    filesOfCard.style.display = "none";
                  }
                }}
                onMouseEnter={() => {
                  functionCalledByButtonsOfImagePopUpHeaderOnMouseEnter();
                }}
                onMouseLeave={() => {
                  functionCalledByButtonsOfImagePopUpHeaderOnMouseLeave();
                }}
              >
                <Image
                  className={`${style.deleteImageOfImagePopUpHeader} deleteImageOfImagePopUpHeader`}
                  src={deleteImage}
                  alt="delete-image"
                />
              </span>
            </div>
          </div>
          <div className={`${style.imagePopUpBody} imagePopUpBody`}>
            <div
              className={`${style.rightPartOfImagePopUpBody} rightPartOfImagePopUpBody`}
              onClick={() => {
                // Selecting elements
                const fileElementInImagePopUpBody: any =
                  document.getElementsByClassName(
                    "fileElementInImagePopUpBody"
                  )[indexOfCard];

                // Changing data of file-element-in-image-pop-up-body
                if (imageIndex > 0) {
                  fileElementInImagePopUpBody.src = `${
                    imageElement[imageIndex--]
                  }`;

                  setImageIndex(imageIndex--);
                } else {
                  fileElementInImagePopUpBody.src = `${
                    imageElement[imageElement.length - 1]
                  }`;

                  setImageIndex(imageElement.length - 1);
                }
              }}
              onMouseEnter={() => {
                functionCalledByButtonsOfImagePopUpHeaderOnMouseEnter();
              }}
              onMouseLeave={() => {
                functionCalledByButtonsOfImagePopUpHeaderOnMouseLeave();
              }}
            >
              <Image
                className={`${style.previousImageOfImagePopUpHeader} previousImageOfImagePopUpHeader`}
                src={previousArrowImage}
                alt="previous-arrow-image"
              />
            </div>
            <div
              className={`${style.middlePartOfImagePopUpBody} middlePartOfImagePopUpBody`}
            >
              <embed
                className={`${style.fileElementInImagePopUpBody} fileElementInImagePopUpBody`}
                src={imageElement[imageIndex]}
              />
            </div>
            <div
              className={`${style.leftPartOfImagePopUpBody} leftPartOfImagePopUpBody`}
              onClick={() => {
                // Selecting elements
                const fileElementInImagePopUpBody: any =
                  document.getElementsByClassName(
                    "fileElementInImagePopUpBody"
                  )[indexOfCard];

                // Changing data of file-element-in-image-pop-up-body
                if (imageIndex < imageElement.length - 1) {
                  fileElementInImagePopUpBody.src = `${
                    imageElement[imageIndex++]
                  }`;

                  setImageIndex(imageIndex++);
                } else {
                  fileElementInImagePopUpBody.src = `${imageElement[0]}`;

                  setImageIndex(0);
                }
              }}
              onMouseEnter={() => {
                functionCalledByButtonsOfImagePopUpHeaderOnMouseEnter();
              }}
              onMouseLeave={() => {
                functionCalledByButtonsOfImagePopUpHeaderOnMouseLeave();
              }}
            >
              <Image
                className={`${style.nextImageOfImagePopUpHeader} nextImageOfImagePopUpHeader`}
                src={nextArrowImage}
                alt="next-arrow-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
