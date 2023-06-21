// Library imports
import { useEffect, useContext } from "react";

// Component imports
import { addNewNoteContext } from "./App";

// Assets
import cardBackgroundImage from "../assets/Images/Icons_and_logos/cardBackground.svg";

// Interfaces
interface ThreeDotMenuElements {
  elementOfCard: any;
  indexOfCard: number;
}

export default function ({ elementOfCard, indexOfCard }: ThreeDotMenuElements) {
  // Variables
  const colors: any = [
    "#F77C80",
    "#5B9CF6",
    "#81C784",
    "#FFF176",
    "#787B86",
    "#FAA1A4",
    "#90BFF9",
    "#A5D6A7",
    "#FFF59D",
    "#B2B5BE",
    "#FCCBCD",
    "#BBD9FB",
    "#C8E6C9",
    "#FFF9C4",
    "#FFFFFF",
  ];

  // Functions
  const functionCalledByColorButtonOnClick = (color: any) => {
    elementOfCard.color = `${color}`;

    const containerOfCard: any =
      document.getElementsByClassName("container-OfCard")[indexOfCard];
    const lowerPartOfCard: any =
      document.getElementsByClassName("lower-part-OfCard")[indexOfCard];

    containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
    lowerPartOfCard.style.backgroundColor = `${elementOfCard.color}`;

    localStorage.setItem("card-notes-in-local-storage", JSON.stringify(addNew));
  };

  // Hooks
  const [addNew] = useContext<any>(addNewNoteContext);

  useEffect(() => {
    const containerOfCard: any =
      document.getElementsByClassName("container-OfCard")[indexOfCard];
    const lowerPartOfCard: any =
      document.getElementsByClassName("lower-part-OfCard")[indexOfCard];

    containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
    lowerPartOfCard.style.backgroundColor = `${elementOfCard.color}`;
  }, [addNew]);

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className="theme-menu-button-OfCard">
        <img src={cardBackgroundImage} alt="cardBackground-image" />
        <div
          className="theme-items-wraper-in-lower-part-OfCard"
          onMouseEnter={() => {
            const themeButtonOfCard: any = document.getElementsByClassName(
              "theme-button-OfCard"
            )[indexOfCard];
            themeButtonOfCard.style.display = "none";
          }}
        >
          <div className="color-items-in-theme-button-OfCard">
            {colors.map((color: any, index: number) => {
              return (
                <div
                  key={index}
                  className="color-in-theme-button-OfCard"
                  style={{
                    backgroundColor: `${color}`,
                  }}
                  onClick={() => functionCalledByColorButtonOnClick(color)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <p className="element-text-in-lower-part-OfCard theme-button-OfCard">
        Theme
      </p>
      <span className="overlay-on-element-in-lower-part-OfCard"></span>
    </>
  );
}
