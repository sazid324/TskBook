// Library imports
import { useContext } from "react";

// Component imports
import { addNewNoteContext, cardArrayContext } from "./App";

// Assets
import threeDotImage from "../assets/Images/Icons_and_logos/threeDot.svg";

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
  const [addNew, setAddNew] = useContext<any>(addNewNoteContext);
  // @ts-ignore
  let cardArray = useContext(cardArrayContext);

  // Adding functionality of Make a copy button in card.
  const functionCalledByMakeACopyButton = (index: number) => {
    const headingOfCard: any =
      document.getElementsByClassName("heading-OfCard")[index];
    const bodyOfCard: any =
      document.getElementsByClassName("body-OfCard")[index];

    const makeACopyOfCard: any = [
      ...addNew,
      {
        id: Date.now() + Math.floor(Math.random() * 78),
        headerValue: `${headingOfCard.value}`,
        bodyValue: `${bodyOfCard.value}`,
        files: elementOfCard.files.map((element: any) => {
          return element;
        }),
        color: `${elementOfCard.color}`,
      },
    ];

    setAddNew(makeACopyOfCard);

    const newReversedArray = (newStateArray: any) => {
      const newArray: any = [];

      for (let i = addNew.length - 1; i >= 0; i--) {
        newArray.push(newStateArray[i]);
      }

      return newArray;
    };

    cardArray = newReversedArray(addNew);
  };

  // Adding functionality of Delete button in card.
  const functionCalledByDeleteButton = (index: number) => {
    const deleteContainerOfCard: any = [...addNew];
    deleteContainerOfCard.splice(index, 1);
    setAddNew(deleteContainerOfCard);
  };

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <div className="three-dot-menu-button-container-OfCard">
        <img src={threeDotImage} alt="threeDot-image" />
        <div
          className="three-dot-items-wraper-in-lower-part-OfCard"
          onMouseEnter={() => {
            const morebuttonParagraphOfCard: any =
              document.getElementsByClassName("more-button-paragraph-OfCard")[
                indexOfCard
              ];
            morebuttonParagraphOfCard.style.display = "none";
          }}
        >
          <ul className="three-dot-items-in-lower-part-OfCard">
            <li className="item-in-three-dot-in-lower-part-OfCard">
              Add label
            </li>
            <li
              className="item-in-three-dot-in-lower-part-OfCard"
              onClick={() => functionCalledByMakeACopyButton(indexOfCard)}
            >
              Make a copy
            </li>
            <li
              className="item-in-three-dot-in-lower-part-OfCard"
              onClick={() =>
                functionCalledByDeleteButton(addNew.length - 1 - indexOfCard)
              }
            >
              Delete note
            </li>
          </ul>
        </div>
      </div>
      <p className="element-text-in-lower-part-OfCard more-button-paragraph-OfCard">
        More
      </p>
      <span className="overlay-on-element-in-lower-part-OfCard"></span>
    </>
  );
}
