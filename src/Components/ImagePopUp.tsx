// Assets
import backImage from "../assets/Images/Icons_and_logos/back.svg";
import deleteImage from "../assets/Images/Icons_and_logos/delete.svg";
import nextArrowImage from "../assets/Images/Icons_and_logos/nextArrow.svg";
import previousArrowImage from "../assets/Images/Icons_and_logos/previousArrow.svg";

// Interfaces
interface ImagePopUpElements {
  addNew: any;
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
  addNew,
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
  // Functions
  const functionCalledByButtonsOfImagePopUpHeaderOnMouseEnter = () => {
    // Clearing privious time event
    clearTimeout(timeOutReference);

    const backImageOfImagePopUpHeader: any = document.getElementsByClassName(
      "back-image-of-image-pop-up-header"
    )[indexOfCard];
    const deleteImageOfImagePopUpHeader: any = document.getElementsByClassName(
      "delete-image-of-image-pop-up-header"
    )[indexOfCard];
    const previousImageOfImagePopUpHeader: any =
      document.getElementsByClassName("previous-image-of-image-pop-up-header")[
        indexOfCard
      ];
    const nextImageOfImagePopUpHeader: any = document.getElementsByClassName(
      "next-image-of-image-pop-up-header"
    )[indexOfCard];

    // Applying style on selected elements
    if (
      editAndSaveButton == true &&
      backImageOfImagePopUpHeader.style.display == "none" &&
      deleteImageOfImagePopUpHeader.style.display == "none" &&
      previousImageOfImagePopUpHeader.style.display == "none" &&
      nextImageOfImagePopUpHeader.style.display == "none"
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
      "back-image-of-image-pop-up-header"
    )[indexOfCard];
    const deleteImageOfImagePopUpHeader: any = document.getElementsByClassName(
      "delete-image-of-image-pop-up-header"
    )[indexOfCard];
    const previousImageOfImagePopUpHeader: any =
      document.getElementsByClassName("previous-image-of-image-pop-up-header")[
        indexOfCard
      ];
    const nextImageOfImagePopUpHeader: any = document.getElementsByClassName(
      "next-image-of-image-pop-up-header"
    )[indexOfCard];

    // Applying style on selected elements
    if (editAndSaveButton == true) {
      const timeOutAfterLeavingTheButton: number = setTimeout(() => {
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
      <section className="image-pop-up-main-container">
        <div className="image-pop-up-container">
          <div className="image-pop-up-header">
            <div className="left-part-of-image-pop-up-header">
              <span
                onClick={() => {
                  // Selecting elements
                  const containerOfCard: any =
                    document.getElementsByClassName("container-OfCard")[
                      indexOfCard
                    ];
                  const imagePopUpMainContainer: any =
                    document.getElementsByClassName(
                      "image-pop-up-main-container"
                    )[indexOfCard];

                  // Applying style on selected elements
                  if (editAndSaveButton == true) {
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
                <img
                  className="back-image-of-image-pop-up-header"
                  src={backImage}
                  alt="back-image"
                />
              </span>
            </div>
            <div className="right-part-of-image-pop-up-header">
              <span
                onClick={() => {
                  // Selecting elements
                  const fileElementInImagePopUpBody: any =
                    document.getElementsByClassName(
                      "file-element-in-image-pop-up-body"
                    )[indexOfCard];

                  // Changing data of file-element-in-image-pop-up-body
                  if (imageIndex == imageElement.length - 1) {
                    fileElementInImagePopUpBody.src = `${
                      imageElement[imageElement.length - 2]
                    }`;
                  }

                  // Deleting image
                  const deleteCurrentImage: any = [...imageElement];
                  deleteCurrentImage.splice(imageIndex, 1);
                  elementOfCard.files = deleteCurrentImage;

                  // Setting uploaded files
                  setUploadedFiles(elementOfCard.files);

                  // Setting new image index
                  if (imageIndex == imageElement.length - 1) {
                    setImageIndex(imageElement.length - 2);
                  }

                  // Saving data to local storage
                  localStorage.setItem(
                    "card-notes-in-local-storage",
                    JSON.stringify(addNew)
                  );
                }}
                onMouseEnter={() => {
                  functionCalledByButtonsOfImagePopUpHeaderOnMouseEnter();
                }}
                onMouseLeave={() => {
                  functionCalledByButtonsOfImagePopUpHeaderOnMouseLeave();
                }}
              >
                <img
                  className="delete-image-of-image-pop-up-header"
                  src={deleteImage}
                  alt="delete-image"
                />
              </span>
            </div>
          </div>
          <div className="image-pop-up-body">
            <div
              className="right-part-of-image-pop-up-body"
              onClick={() => {
                // Selecting elements
                const fileElementInImagePopUpBody: any =
                  document.getElementsByClassName(
                    "file-element-in-image-pop-up-body"
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
              <img
                className="previous-image-of-image-pop-up-header"
                src={previousArrowImage}
                alt="previous-arrow-image"
              />
            </div>
            <div className="middle-part-of-image-pop-up-body">
              <embed
                className="file-element-in-image-pop-up-body"
                src={imageElement[imageIndex]}
              />
            </div>
            <div
              className="left-part-of-image-pop-up-body"
              onClick={() => {
                // Selecting elements
                const fileElementInImagePopUpBody: any =
                  document.getElementsByClassName(
                    "file-element-in-image-pop-up-body"
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
              <img
                className="next-image-of-image-pop-up-header"
                src={nextArrowImage}
                alt="next-arrow-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
