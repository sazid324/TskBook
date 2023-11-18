// Library imports
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

// CSS imports
import style from "@/components/Card/Card.module.scss";

// Redux imports
import { copyCard, deleteCard } from "@/redux/slices/cardSlice";

// Assets
import threeDotImage from "../../../../public/assets/Images/Icons/threeDot.svg";

// Interfaces
interface ThreeDotMenuElements {
  elementOfCard: any;
  indexOfCard: number;
}

export default function ThreeDotMenu({
  elementOfCard,
  indexOfCard,
}: ThreeDotMenuElements) {
  // Hooks
  const addNewCard: any = useSelector((state: any) => {
    return state.CardSlice.cardData;
  });
  const cardDispatch = useDispatch();

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div
        className={`${style.threeDotMenuButtonContainerOfCard} threeDotMenuButtonContainerOfCard`}
      >
        <Image src={threeDotImage} alt="threeDot-image" />
        <div
          className={`${style.threeDotItemsWrapperInLowerPartOfCard} threeDotItemsWrapperInLowerPartOfCard`}
          onMouseEnter={() => {
            const morebuttonParagraphOfCard: any =
              document.getElementsByClassName("moreButtonParagraphOfCard")[
                indexOfCard
              ];
            morebuttonParagraphOfCard.style.display = "none";
          }}
        >
          <ul
            className={`${style.threeDotItemsInLowerPartOfCard} threeDotItemsInLowerPartOfCard`}
          >
            <li
              className={`${style.itemInThreeDotInLowerPartOfCard} itemInThreeDotInLowerPartOfCard`}
            >
              Add label
            </li>
            <li
              className={`${style.itemInThreeDotInLowerPartOfCard} itemInThreeDotInLowerPartOfCard`}
              onClick={() => {
                cardDispatch(
                  copyCard({
                    headerValue: elementOfCard.headerValue,
                    bodyValue: elementOfCard.bodyValue,
                    files: elementOfCard.files,
                    color: elementOfCard.color,
                  })
                );
              }}
            >
              Make a copy
            </li>
            <li
              className={`${style.itemInThreeDotInLowerPartOfCard} itemInThreeDotInLowerPartOfCard`}
              onClick={() =>
                cardDispatch(deleteCard(addNewCard.length - 1 - indexOfCard))
              }
            >
              Delete note
            </li>
          </ul>
        </div>
      </div>
      <p
        className={`${style.elementTextInLowerPartOfCard} elementTextInLowerPartOfCard moreButtonParagraphOfCard`}
      >
        More
      </p>
      <span
        className={`${style.overlayOnElementInLowerPartOfCard} overlayOnElementInLowerPartOfCard`}
      ></span>
    </>
  );
}
