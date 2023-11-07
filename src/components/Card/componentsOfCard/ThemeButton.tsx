// Library imports
import { useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

// CSS imports
import style from "@/components/Card/Card.module.scss";

// Redux imports
import { saveCard } from "@/redux/slices/cardSlice";

// Assets
import cardBackgroundImage from "../../../../public/assets/Images/Icons_and_logos/cardBackground.svg";
import arrowRight from "../../../../public/assets/Images/Icons_and_logos/arrowRight.svg";

// Interfaces
interface ThreeDotMenuElements {
  elementOfCard: any;
  indexOfCard: number;
}

export default function ThemeButton({ elementOfCard, indexOfCard }: ThreeDotMenuElements) {
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

  // Hooks
  const addNewCard: any = useSelector((state: any) => {
    return state.CardSlice;
  });
  const cardDispatch = useDispatch();

  useEffect(() => {
    const containerOfCard: any =
      document.getElementsByClassName("containerOfCard")[indexOfCard];
    const shadowPartOfCard: any =
      document.getElementsByClassName("shadowPartOfCard")[indexOfCard];
    const lowerPartOfCard: any =
      document.getElementsByClassName("lowerPartOfCard")[indexOfCard];

    containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
    shadowPartOfCard.style.cssText = `background: linear-gradient(to bottom, transparent, ${elementOfCard.color} 95%);`;
    lowerPartOfCard.style.backgroundColor = `${elementOfCard.color}`;
  }, [addNewCard]);

  // Functions
  const functionCalledByColorButtonOnClick = (color: any) => {
    // Dispatching slice
    cardDispatch(
      saveCard({
        _id: elementOfCard._id,
        headerValue: elementOfCard.headerValue,
        bodyValue: elementOfCard.bodyValue,
        files: elementOfCard.files,
        color: color,
        index: addNewCard.length - 1 - indexOfCard,
      })
    );

    const containerOfCard: any =
      document.getElementsByClassName("containerOfCard")[indexOfCard];
    const shadowPartOfCard: any =
      document.getElementsByClassName("shadowPartOfCard")[indexOfCard];
    const lowerPartOfCard: any =
      document.getElementsByClassName("lowerPartOfCard")[indexOfCard];

    containerOfCard.style.backgroundColor = `${elementOfCard.color}`;
    shadowPartOfCard.style.cssText = `background: linear-gradient(to bottom, transparent, ${color} 95%);`;
    lowerPartOfCard.style.backgroundColor = `${elementOfCard.color}`;
  };

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div
        className={`${style.themeMenuButtonContainerOfCard} themeMenuButtonContainerOfCard`}
      >
        <Image src={cardBackgroundImage} alt="cardBackground-image" />
        <div
          className={`${style.themeItemsWraperInLowerPartOfCard} themeItemsWraperInLowerPartOfCard`}
          onMouseEnter={() => {
            const themeButtonParagraphOfCard: any =
              document.getElementsByClassName("themeButtonParagraphOfCard")[
                indexOfCard
              ];
            themeButtonParagraphOfCard.style.display = "none";
          }}
        >
          <div
            className={`${style.contentsInThemeButtonOfCard} contentsInThemeButtonOfCard`}
          >
            <h4
              className={`${style.colorItemsHeadingOfCard} colorItemsHeadingOfCard`}
            >
              <p className={`${style.colorItemsHeadingParagraphOfCard} colorItemsHeadingParagraphOfCard`}>Pick color</p>
              <Image
                className={`${style.colorItemsHeadingImageOfCard} colorItemsHeadingImageOfCard`}
                src={arrowRight}
                alt="arrowRight-image"
              />
            </h4>
            <div
              className={`${style.colorItemsInThemeButtonOfCard} colorItemsInThemeButtonOfCard`}
            >
              {colors.map((color: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={`${style.colorInThemeButtonOfCard} colorInThemeButtonOfCard`}
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
      </div>
      <p
        className={`${style.elementTextInLowerPartOfCard} elementTextInLowerPartOfCard themeButtonParagraphOfCard`}
      >
        Theme
      </p>
      <span
        className={`${style.overlayOnElementInLowerPartOfCard} overlayOnElementInLowerPartOfCard`}
      ></span>
    </>
  );
}
