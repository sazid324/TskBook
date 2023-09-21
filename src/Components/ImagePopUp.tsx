// Assets
import backImage from "../assets/Images/Icons_and_logos/back.svg";
import deleteImage from "../assets/Images/Icons_and_logos/delete.svg";
import nextArrowImage from "../assets/Images/Icons_and_logos/nextArrow.svg";
import previousArrowImage from "../assets/Images/Icons_and_logos/previousArrow.svg";

// Interfaces
interface ImagePopUpElements {
  indexOfCard: number;
  editAndSaveButton: boolean;
  timeOutReference: number;
  setTimeOutReference: any;
}

export default function ImagePopUp({
  indexOfCard,
  editAndSaveButton,
  timeOutReference,
  setTimeOutReference,
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
                  const imagePopUpMainContainer: any =
                    document.getElementsByClassName(
                      "image-pop-up-main-container"
                    )[indexOfCard];

                  // Applying style on selected elements
                  if (editAndSaveButton == true) {
                    imagePopUpMainContainer.style.cssText = "display: none;";
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
              {/* <embed className="file-OfCard" src={} /> */}
            </div>
            <div
              className="left-part-of-image-pop-up-body"
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
